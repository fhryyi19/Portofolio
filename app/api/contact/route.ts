import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use a custom SMTP service (e.g., SendGrid, Mailgun)
            auth: {
                user: process.env.EMAIL_USER?.trim(),
                pass: process.env.EMAIL_PASS?.trim(),
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email,
            subject: `New Message from ${name} (${email})`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
