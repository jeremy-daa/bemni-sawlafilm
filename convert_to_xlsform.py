import re
import sys
import os

filepath = r"c:\Users\hp\Downloads\Telegram Desktop\New folder (3)\converted\26-05-14_ERCS_SRC_Baseline_Survey_Tool_Final.md"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_tr = False
        self.in_td_th = False
        self.in_ul = False
        self.in_li = False
        self.current_cell = []
        self.current_row = []
        self.rows = []
        
    def handle_starttag(self, tag, attrs):
        if tag == 'tr':
            self.in_tr = True
            self.current_row = []
        elif tag in ('td', 'th'):
            self.in_td_th = True
            self.current_cell = []
        elif tag == 'ul':
            self.in_ul = True
        elif tag == 'li':
            self.in_li = True
            self.current_cell.append("- ")

    def handle_endtag(self, tag):
        if tag == 'tr':
            self.in_tr = False
            self.rows.append(self.current_row)
        elif tag in ('td', 'th'):
            self.in_td_th = False
            self.current_row.append("".join(self.current_cell).strip())
        elif tag == 'ul':
            self.in_ul = False
        elif tag == 'li':
            self.in_li = False
            self.current_cell.append("\n")

    def handle_data(self, data):
        if self.in_td_th:
            self.current_cell.append(data.strip())

parser = MyHTMLParser()
parser.feed(content)

survey = []
choices = []

survey.append(["type", "name", "label", "relevant"])
choices.append(["list_name", "name", "label"])

def get_name(s):
    # make alphanumeric
    s = re.sub(r'[^a-zA-Z0-9]', '_', s.lower())
    s = re.sub(r'_+', '_', s)
    s = s.strip('_')
    return s[:30]

skip_logic = None

for row in parser.rows:
    if not row or len(row) < 3:
        continue
    
    q_no = row[0].strip()
    q_text = row[1].strip()
    q_choices_raw = row[2].strip()
    
    if not q_no and "If" in q_text and "respond to the following" in q_text and "SKIP LOGIC" in q_choices_raw.upper():
        # this is a skip logic indicator. The previous question should have triggered it.
        # e.g., "If yes, respond to the following"
        if "yes" in q_text.lower():
            skip_logic = "yes"
        elif "no" in q_text.lower():
            skip_logic = "no"
        continue
        
    if not re.match(r'^\d+\.\d+$', q_no):
        continue
        
    q_name = f"q_{q_no.replace('.', '_')}"
    
    relevant = ""
    if skip_logic is not None:
        # Wait, the previous question was the trigger. We don't know the exact name of the previous question here easily unless we track it.
        # Let's track previous question
        prev_q = survey[-1] if len(survey) > 1 else None
        if prev_q:
            trigger_val = 'yes' if skip_logic == 'yes' else 'no'
            relevant = f"${{{prev_q[1]}}} = '{trigger_val}'"
        skip_logic = None
        
    if "Region" in q_text and "Amhara" in q_choices_raw:
        q_type = "select_one region"
        survey.append([q_type, q_name, q_text, relevant])
        for c in q_choices_raw.split('\n'):
            c = c.replace('- ', '').strip()
            if c:
                choices.append(["region", get_name(c), c])
    elif "Zone" in q_text and "Jimma" in q_choices_raw:
        q_type = "select_one zone"
        survey.append([q_type, q_name, q_text, relevant])
        for c in q_choices_raw.split('\n'):
            c = c.replace('- ', '').strip()
            if c:
                choices.append(["zone", get_name(c), c])
    elif "Woreda" in q_text and "Goma" in q_choices_raw:
        q_type = "select_one woreda"
        survey.append([q_type, q_name, q_text, relevant])
        for c in q_choices_raw.split('\n'):
            c = c.replace('- ', '').strip()
            if c:
                choices.append(["woreda", get_name(c), c])
    elif q_choices_raw.startswith("- "):
        # select one or multiple
        if "challenges" in q_text.lower() or "barriers" in q_text.lower() or "assets" in q_text.lower() or "support you need" in q_text.lower() or "cbo" in q_text.lower() or "priority" in q_text.lower():
            q_type = f"select_multiple {q_name}_list"
        else:
            q_type = f"select_one {q_name}_list"
            
        survey.append([q_type, q_name, q_text, relevant])
        for c in q_choices_raw.split('\n'):
            c = c.replace('- ', '').strip()
            if c:
                choices.append([f"{q_name}_list", get_name(c), c])
    else:
        # text or integer or date
        if "Age" in q_text or "Size" in q_text or "How many" in q_text or "Duration" in q_text:
            q_type = "integer"
        elif "Date" in q_text:
            q_type = "date"
        elif "GPS" in q_text or "Coordinates" in q_text:
            q_type = "geopoint"
        else:
            q_type = "text"
        survey.append([q_type, q_name, q_text, relevant])

import csv

with open("survey.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(survey)

with open("choices.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(choices)

try:
    import pandas as pd
    with pd.ExcelWriter(r"c:\Users\hp\Downloads\Telegram Desktop\New folder (3)\converted\ERCS_SRC_Baseline_Survey_Tool_Kobo.xlsx") as writer:
        pd.DataFrame(survey[1:], columns=survey[0]).to_excel(writer, sheet_name='survey', index=False)
        pd.DataFrame(choices[1:], columns=choices[0]).to_excel(writer, sheet_name='choices', index=False)
    print("XLSX created successfully.")
except Exception as e:
    print(f"Error creating XLSX, please ensure pandas and openpyxl are installed: {e}")
