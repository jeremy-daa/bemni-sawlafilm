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
      <div style="font-family: sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
        <h2 style="color: #D3B03A; border-bottom: 2px solid #D3B03A; padding-bottom: 10px;">${subject}</h2>
        
        <p><strong>Name/Role:</strong> ${name_role || name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    `

    if (isDetailedRequest) {
      emailHtml += `
        <h3 style="color: #C9A84C; margin-top: 25px; border-bottom: 1px solid #eee;">Production Details</h3>
        <p><strong>Project Type:</strong> ${project_type}</p>
        <p><strong>Stage:</strong> ${stage || 'Not specified'}</p>
        <p><strong>Dates:</strong> ${dates}</p>
        <p><strong>Crew Size:</strong> ${crew_size}</p>
        <p><strong>Regions:</strong> ${regions}</p>
        <p><strong>Brief:</strong><br/>${brief.replace(/\n/g, '<br/>')}</p>

        <h3 style="color: #C9A84C; margin-top: 25px; border-bottom: 1px solid #eee;">Logistics & Budget</h3>
        <p><strong>Equipment:</strong> ${equipment || 'Not specified'}</p>
        <p><strong>Drone:</strong> ${drone}</p>
        <p><strong>Customs:</strong> ${customs || 'No'}</p>
        <p><strong>Urgency:</strong> ${urgency || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget_range} ${currency}</p>
        <p><strong>Source:</strong> ${source || 'Unknown'}</p>
        <p><strong>Notes:</strong><br/>${notes || 'None'}</p>
      `
    } else {
      emailHtml += `
        <h3 style="color: #C9A84C; margin-top: 25px; border-bottom: 1px solid #eee;">Enquiry</h3>
        <p><strong>Type:</strong> ${enquiry_type || 'General enquiry'}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `
    }

    emailHtml += `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
          Sent from Sawla Films Website
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
