import nodemailer from 'nodemailer';

export default async function sendSignupOtp(to, otp) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
      user: process.env.NEXT_PRIVATE_EMAIL,
      pass: process.env.NEXT_PRIVATE_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PRIVATE_EMAIL,
    to,
    subject: 'Your OMA OTP',
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://your-OMA-logo-url/logo.svg" alt="OMA Logo" style="max-width: 150px;" />
      </div>

      <div style="padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
        <h2 style="color: #333;">Welcome to OMA</h2>
        <p style="font-size: 16px;">Hi there,</p>
        <p style="font-size: 16px;">
          Thank you for signing up with OMA! Your One-Time Password (OTP) is below. This OTP is valid for the next 10 minutes.
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <div style="display: inline-block; background-color: #28a745; color: white; padding: 15px 25px; border-radius: 5px; font-size: 24px; font-weight: bold;">
            ${otp}
          </div>
        </div>
        <p style="font-size: 16px;">
          If you did not sign up for OMA, please ignore this email or contact our support team for assistance.
        </p>
        <p style="font-size: 16px;">Best regards, <br/> The OMA Team</p>
      </div>

      <div style="text-align: center; margin-top: 20px; color: #999;">
        <p style="font-size: 14px;">&copy; ${new Date().getFullYear()} OMA. All rights reserved.</p>
        <p style="font-size: 14px;">Location: [Your Address] | Phone: +234 800 000 0000 | <a href="mailto:support@oma.com" style="color: #28a745;">support@oma.com</a></p>
      </div>
    </div>
  `,
  };

  return transporter.sendMail(mailOptions);
}
