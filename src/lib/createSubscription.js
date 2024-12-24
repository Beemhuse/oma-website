import { client } from "@/sanity/client";
import { v4 as uuidv4 } from "uuid";

export const createSubscriptions = async ({
    name,
    email,
    amount,
    plan,
    transactionRef,
    status = "pending",
    method,
  }) => {
    try {
      const shortUuid = uuidv4().split("-")[0]; 
      const customSubscriptionId = `subscription-${shortUuid}`;
  
      const subscription = await client.create({
        _type: "subscription",
        id: customSubscriptionId,
        name,
        email,
        amount,
        plan: {
            _type: "reference",
            _ref: plan, // Reference to the plan document
          },
        transactionRef,
        transactionDate: new Date().toISOString(),
        status,
        method,
      });
  
      return subscription;
    } catch (error) {
      console.error("Error saving transaction to Sanity:", error);
      return {
        error: "Internal Server Error",
        message: error.message || "Unknown error occurred",
      };
    }
  };
  