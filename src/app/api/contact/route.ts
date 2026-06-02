import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, enquiry_type, name_role, dates, crew_size, project_type, stage, regions, brief, equipment, drone, customs, urgency, budget_range, currency, source, notes, _gotcha } = body

    // Simple honeypot check
    if (_gotcha) {
      return NextResponse.json({ message: 'Spam detected' }, { status: 400 })
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Determine if it's a contact enquiry or a full production brief
    const isDetailedRequest = !!brief || !!project_type
    const subject = isDetailedRequest 
      ? `[New Brief] ${project_type} - ${name_role || name}`
      : `[Contact] Enquiry from ${name}`

    // Build the email body
    let emailHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #F3F1ED; background-color: #0B0F14; max-width: 600px; margin: 0 auto; padding: 40px 30px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.06);">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 35px;">
          <h1 style="color: #D3B03A; font-family: Georgia, serif; font-weight: 300; font-size: 24px; margin: 0; letter-spacing: 0.05em; font-style: italic;">Sawla Films</h1>
          <p style="color: #A4ADB5; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin-top: 8px; margin-bottom: 0;">New Incoming Request</p>
        </div>

        <div style="background-color: #070A0D; border: 1px solid rgba(255,255,255,0.04); padding: 25px; border-radius: 3px; margin-bottom: 25px;">
          <h2 style="color: #F3F1ED; font-size: 18px; font-weight: 400; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 15px;">${subject}</h2>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #A4ADB5; width: 120px;">Name/Role:</td>
              <td style="padding: 8px 0; color: #F3F1ED;">${name_role || name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #A4ADB5;">Email:</td>
              <td style="padding: 8px 0; color: #F3F1ED;"><a href="mailto:${email}" style="color: #D3B03A; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #A4ADB5;">Phone:</td>
              <td style="padding: 8px 0; color: #F3F1ED;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #A4ADB5;">Company:</td>
              <td style="padding: 8px 0; color: #F3F1ED;">${company || 'Not provided'}</td>
            </tr>
          </table>
        </div>
    `

    if (isDetailedRequest) {
      emailHtml += `
        <!-- Production Details -->
        <h3 style="color: #D3B03A; font-family: Georgia, serif; font-size: 18px; font-weight: 300; margin-top: 30px; margin-bottom: 15px; font-style: italic;">Production Details</h3>
        <div style="background-color: #070A0D; border: 1px solid rgba(255,255,255,0.04); padding: 25px; border-radius: 3px; margin-bottom: 25px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #A4ADB5; width: 120px; border-bottom: 1px solid rgba(255,255,255,0.03);">Project Type:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${project_type}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Stage:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${stage || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Dates:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${dates}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Crew Size:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${crew_size}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5;">Regions:</td><td style="padding: 8px 0; color: #F3F1ED;">${regions}</td></tr>
          </table>
          <div style="margin-top: 20px;">
            <div style="color: #A4ADB5; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Brief</div>
            <div style="color: #F3F1ED; font-size: 14px; line-height: 1.6; background-color: rgba(255,255,255,0.02); padding: 15px; border-radius: 2px;">
              ${brief.replace(/\n/g, '<br/>')}
            </div>
          </div>
        </div>

        <!-- Logistics & Budget -->
        <h3 style="color: #D3B03A; font-family: Georgia, serif; font-size: 18px; font-weight: 300; margin-top: 30px; margin-bottom: 15px; font-style: italic;">Logistics & Budget</h3>
        <div style="background-color: #070A0D; border: 1px solid rgba(255,255,255,0.04); padding: 25px; border-radius: 3px; margin-bottom: 25px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #A4ADB5; width: 120px; border-bottom: 1px solid rgba(255,255,255,0.03);">Equipment:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${equipment || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Drone:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${drone}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Customs:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${customs || 'No'}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Urgency:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${urgency || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Budget:</td><td style="padding: 8px 0; color: #D3B03A; border-bottom: 1px solid rgba(255,255,255,0.03);">${budget_range} ${currency}</td></tr>
            <tr><td style="padding: 8px 0; color: #A4ADB5; border-bottom: 1px solid rgba(255,255,255,0.03);">Source:</td><td style="padding: 8px 0; color: #F3F1ED; border-bottom: 1px solid rgba(255,255,255,0.03);">${source || 'Unknown'}</td></tr>
          </table>
          <div style="margin-top: 20px;">
            <div style="color: #A4ADB5; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Notes</div>
            <div style="color: #F3F1ED; font-size: 14px; line-height: 1.6; background-color: rgba(255,255,255,0.02); padding: 15px; border-radius: 2px;">
              ${notes ? notes.replace(/\n/g, '<br/>') : 'None provided'}
            </div>
          </div>
        </div>
      `
    } else {
      emailHtml += `
        <h3 style="color: #D3B03A; font-family: Georgia, serif; font-size: 18px; font-weight: 300; margin-top: 30px; margin-bottom: 15px; font-style: italic;">Enquiry Details</h3>
        <div style="background-color: #070A0D; border: 1px solid rgba(255,255,255,0.04); padding: 25px; border-radius: 3px;">
          <p style="margin-top: 0; margin-bottom: 15px; font-size: 14px;"><span style="color: #A4ADB5; margin-right: 10px;">Type:</span> <span style="color: #F3F1ED; background: rgba(211,176,58,0.1); color: #D3B03A; padding: 4px 10px; border-radius: 100px; font-size: 12px; letter-spacing: 0.05em;">${enquiry_type || 'General enquiry'}</span></p>
          <div style="color: #A4ADB5; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</div>
          <div style="color: #F3F1ED; font-size: 15px; line-height: 1.7; background-color: rgba(255,255,255,0.02); padding: 20px; border-radius: 2px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `
    }

    emailHtml += `
        <!-- Footer -->
        <div style="margin-top: 40px; text-align: center; font-size: 11px; color: #A4ADB5; letter-spacing: 0.05em;">
          <p style="margin: 0;">Sent securely from <strong>www.ethiopiafilmfixer.com</strong></p>
        </div>
      </div>
    `

    const mailOptions = {
      from: `"${name_role || name}" <${process.env.EMAIL_USER}>`, // Recommended to send from your own authenticated email
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: subject,
      html: emailHtml,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error: any) {
    console.error('Email error:', error)
    return NextResponse.json({ message: 'Failed to send', error: error.message }, { status: 500 })
  }
}
