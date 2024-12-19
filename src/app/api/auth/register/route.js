import { saveOtp } from "@/lib/saveOtp";
import sendSignupOtp from "@/lib/sendSignupOtp";
import { createUser,  getUserByEmail } from "@/sanity";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const formattedEmail = email.toLowerCase();
    const existingUser = await getUserByEmail(formattedEmail);

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User with this email already exists" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      _type: "user",
      email: formattedEmail,
      password: hashedPassword,
      isActive: false, // Initially set to inactive until OTP is verified
      phone: "", // Optional field
      address: "", // Optional field
    };

    const newUser = await createUser(user);

    if ("_id" in newUser && newUser._id) {
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      const expiresAt = Date.now() + 10 * 60 * 1000; 
      await saveOtp(formattedEmail, otp, expiresAt);

      await sendSignupOtp(formattedEmail, otp);

      return new Response(
        JSON.stringify({
          message: "User signed up successfully! OTP sent to your email.",
        }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Failed to create user" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error during signup:", err);
    return new Response(
      JSON.stringify({ message: "An error occurred during signup" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
