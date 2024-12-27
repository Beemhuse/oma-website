import { client } from "@/sanity/client";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    console.log(body)

    const { name, email,phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    await client.create({
      _type: "contact",
      name,
      email,
      phone,
      subject,
      message,
    });

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
