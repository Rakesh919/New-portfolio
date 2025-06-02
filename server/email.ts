import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    // Try SendGrid first if available
    if (process.env.SENDGRID_API_KEY) {
      return await sendWithSendGrid(data);
    }
    
    // Fallback to Gmail SMTP
    return await sendWithGmail(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

async function sendWithSendGrid(data: EmailData): Promise<boolean> {
  try {
    const sgMail = await import('@sendgrid/mail');
    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'noreply@example.com';
    const toEmail = process.env.TO_EMAIL || 'rakesh88577@gmail.com';

    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY not configured');
    }

    sgMail.default.setApiKey(apiKey);

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: `New Contact Form Message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">New Contact Form Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">${data.message}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    await sgMail.default.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid error:', error);
    throw error;
  }
}

async function sendWithGmail(data: EmailData): Promise<boolean> {
  try {
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const toEmail = process.env.TO_EMAIL || 'rakesh88577@gmail.com';

    if (!gmailUser || !gmailPass) {
      console.error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.');
      return false;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

    const mailOptions = {
      from: gmailUser,
      to: toEmail,
      subject: `New Contact Form Message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">New Contact Form Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">${data.message}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Gmail SMTP error:', error);
    return false;
  }
}