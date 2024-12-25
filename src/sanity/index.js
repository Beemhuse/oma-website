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


  // Valid status options for transactions
  const VALID_STATUSES = ['pending', 'completed', 'failed', 'cancelled', 'in_progress'];
  
  export const updateTransactionStatus = async (transactionRef, newStatus) => {
    try {
      // Validate the new status
      if (!VALID_STATUSES.includes(newStatus)) {
        throw new Error(`Invalid status '${newStatus}'. Valid statuses are: ${VALID_STATUSES.join(', ')}`);
      }
  
      // Fetch the transaction using its unique transaction reference
      const transaction = await client.fetch(
        `*[_type == 'transaction' && transactionRef == $transactionRef][0]`,
        { transactionRef }
      );
  
      // Check if the transaction exists
      if (!transaction) {
        throw new Error(`Transaction with reference '${transactionRef}' not found.`);
      }
  
      // Update the status field in the transaction
      const updatedTransaction = await client
        .patch(transaction._id) // Use the transaction's `_id`
        .set({ status: newStatus })
        .commit();
  
      return {
        success: true,
        message: `Transaction status updated successfully.`,
        oldTransaction: transaction,
        updatedTransaction,
      };
    } catch (error) {
      console.error('Error updating transaction status:', error);
      return {
        success: false,
        message: error.message || 'Failed to update transaction status.',
      };
    }
  };
  