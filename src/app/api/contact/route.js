import sendMail from "@/lib/sendMail";
import { client } from "@/sanity/client";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    const { name, email,phone, subject, message } = body;
    const formattedEmail = email.toLowerCase();

    // Validate required fields
    if (!name || !formattedEmail || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    await client.create({
      _type: "contact",
      name,
      email: formattedEmail,
      phone,
      subject,
      message,
    });

     // 2. Send an email to the company
     const htmlContent = `
     <div style="
       font-family: Arial, sans-serif; 
       color: #333; 
       max-width: 600px; 
       margin: 0 auto; 
       padding: 20px; 
       border: 1px solid #e0e0e0; 
       border-radius: 12px; 
       background-color: #ffffff;
       box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
       
       <!-- Header Section -->
       <div style="text-align: center; margin-bottom: 30px;">
         <img 
           src="https://res.cloudinary.com/dj3zrsni6/image/upload/v1736268742/One_Map_1_qrdrmg.png" 
           alt="Onemapafrica Logo" 
           style="max-width: 120px; margin-bottom: 10px;" />
         <h1 style="
           font-size: 24px; 
           font-weight: bold; 
           color: #2c3e50; 
           margin: 0;">
           New Contact Submission
         </h1>
       </div>
   
       <!-- Content Section -->
       <div style="
         padding: 20px; 
         background-color: #f8f9fa; 
         border-radius: 10px; 
         margin-bottom: 20px; 
         border: 1px solid #e0e0e0;">
         
         <h2 style="
           font-size: 20px; 
           font-weight: 600; 
           color: #34495e; 
           margin-bottom: 20px; 
           text-align: center;">
           Contact Details
         </h2>
         
         <div style="font-size: 16px; line-height: 1.6; color: #555;">
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${formattedEmail}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong></p>
           <div style="
             background-color: #ffffff; 
             padding: 15px; 
             border-radius: 8px; 
             border: 1px solid #e0e0e0; 
             color: #555; 
             line-height: 1.6;">
             ${message}
           </div>
         </div>
   
         <p style="
           font-size: 14px; 
           color: #7f8c8d; 
           text-align: center; 
           margin-top: 20px;">
           Submitted on: ${new Date().toLocaleString()}
         </p>
       </div>
   
       <!-- Footer Section -->
       <div style="text-align: center; color: #95a5a6; margin-top: 20px;">
         <p style="font-size: 14px; margin: 5px 0;">
           &copy; ${new Date().getFullYear()} Onemapafrica. All rights reserved.
         </p>
         <p style="font-size: 14px; margin: 5px 0;">
           Ghana, Gambia, Lesotho, Kenya, Liberia | Phone: +233 50 105 2495 | 
           <a href="mailto:onemapafrica@gmail.com" style="color: #3498db; text-decoration: none;">
             onemapafrica@gmail.com
           </a>
         </p>
       </div>
     </div>
   `;
   
   await sendMail(formattedEmail, "New Contact Form Submission", htmlContent);

    // Send success response
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error saving message to Sanity:", error);

    return NextResponse.json(
      { error: "Failed to send the message." },
      { status: 500 }
    );
  }
}
