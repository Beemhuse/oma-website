import { client } from "@/sanity/client";
import { v4 as uuidv4 } from "uuid";

export const createDonation = async ({
  amount,
  transactionRef,
  status = "pending",
  method,
}) => {
  try {
    const shortUuid = uuidv4().split("-")[0]; 
    const customTransactionId = `txn-${shortUuid}`;

    const donation = await client.create({
      _type: "donation",
      id: customTransactionId,
      amount,
      transactionRef,
      transactionDate: new Date().toISOString(),
      status,
      method,
    });

    return donation;
  } catch (error) {
    console.error("Error saving transaction to Sanity:", error);
    return {
      error: "Internal Server Error",
      message: error.message || "Unknown error occurred",
    };
  }
};
