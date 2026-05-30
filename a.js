const fs = require('fs');

// Replace 'data.json' with your actual file path
fs.readFile('./src/data/gallery-index.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        const count = jsonData.records.length;
        console.log(`Number of records: ${count}`);
    } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
    }
});