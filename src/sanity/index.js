import { client } from './client';
// import { ensureUserExists } from '@/utils/checkUser';


export const getUserByEmail = async (email) => {
  const query = '*[_type == "user" && email == $email][0]';
  const params = { email };
  try {
    const user = await client.fetch(query, params);
    return user;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    return null;
  }
};



  export const createUser = async (user) => {
    try {
      // Add default values for `createdAt` and `updatedAt` if needed
      const userData = {
        ...user,
        _type: "user",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
  
      // Only pass valid fields to the Sanity client
      const sanityResponse = await client.create(userData);
      console.log("Sanity Response:", sanityResponse);
      return sanityResponse; // Ensure returned type matches Customer interface
    } catch (sanityError) {
        if (sanityError instanceof Error) {
            console.error("Error creating user:", sanityError.message);
            return { error: "Internal Server Error", message: sanityError.message };
          } else {
            console.error("Unknown error occurred:", sanityError);
            return { error: "Internal Server Error", message: "An unknown error occurred" };
          }
    }
  };