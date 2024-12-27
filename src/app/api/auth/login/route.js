import { getUserByEmail } from '@/sanity';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const formattedEmail = email.toLowerCase();

    // Retrieve user by email
    const user = await getUserByEmail(formattedEmail); // Implement this function
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Invalid credentials' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ error: 'Invalid credentials' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // Token expires in 7 days
    );

    // Return success response
    return new Response(
      JSON.stringify({
        message: 'User signed in successfully!',
        user: { email: user.email, id: user._id }, // Return safe user data
        token,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(
      JSON.stringify({ message: 'An error occurred' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
