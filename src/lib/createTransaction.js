import { client } from "@/sanity/client"; // Ensure you have configured Sanity client
import { v4 as uuidv4 } from "uuid";

/**
 * Creates a transaction document in Sanity.
 * 
 * @param {Object} transactionData - The transaction data.
 * @param {string} transactionData.type - The type of transaction (e.g., "subscription" or "donation").
 * @param {string} transactionData.name - The name of the individual or entity.
 * @param {string} transactionData.email - The email address of the individual or entity.
 * @param {number} transactionData.amount - The transaction amount.
 * @param {string} transactionData.currency - The currency used (e.g., "USD").
 * @param {string} transactionData.transactionRef - The unique transaction reference.
 * @param {string} transactionData.status - The status of the transaction (e.g., "pending", "completed").
 * @param {string} transactionData.method - The payment method (e.g., "paystack").
 * @param {string} [transactionData.subscriptionPlan] - The ID of the subscription plan (if type is "subscription").
 * @param {string} [transactionData.donationPurpose] - The purpose of the donation (if type is "donation").
 * @returns {Promise<Object>} - The created transaction document or an error response.
 */
export const createTransaction = async (transactionData) => {
  try {
    const {
      type,
      name,
      email,
      amount,
      currency,
      transactionRef,
      status,
      method,
      subscriptionPlan,
      donationPurpose,
    } = transactionData;

    // Validate required fields
    if (!type || !name || !email || !amount || !currency || !transactionRef || !status || !method) {
      throw new Error("Missing required transaction fields.");
    }

    // Generate a unique transaction ID
    const transactionId = uuidv4();

    const transactionDocument = {
      _type: "transaction",
      id: transactionId,
      type,
      name,
      email,
      amount,
      currency,
      transactionDate: new Date().toISOString(),
      transactionRef,
      status,
      method,
    };

    // Conditionally add fields based on the type
    if (type === "subscription" && subscriptionPlan) {
      transactionDocument.subscriptionPlan = {
        _type: "reference",
        _ref: subscriptionPlan,
      };
    } else if (type === "donation" && donationPurpose) {
      transactionDocument.donationPurpose = donationPurpose;
    }

    // Save the transaction to Sanity
    const createdTransaction = await client.create(transactionDocument);
    return createdTransaction;
  } catch (error) {
    console.error("Error creating transaction:", error);
    return {
      error: "Failed to create transaction.",
      message: error.message || "Unknown error occurred",
    };
  }
};
