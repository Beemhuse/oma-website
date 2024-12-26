import { client } from "@/sanity/client";

export const POST = async (req) => {
  try {
    const { firstName, lastName, email, skills, message } = await req.json();

    const result = await client.create({
      _type: "volunteer",
      firstName,
      lastName,
      email,
      skills,
      message,
    });

    return new Response(
      JSON.stringify({
        message: "Volunteer data submitted successfully",
        result,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating document:", error);

    return new Response(
      JSON.stringify({
        message: "Error submitting data",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const OPTIONS = () => {
  return new Response(null, {
    headers: {
      Allow: "POST",
    },
  });
};
