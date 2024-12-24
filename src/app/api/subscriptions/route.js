// import { createSubscriptions } from "@/lib/createSubscription";
import { initializePaystack } from "@/lib/paystack";

import { client } from "@/sanity/client";
import { v4 as uuidv4 } from "uuid";
 const createSubscriptions = async ({
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
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, amount, plan } = body;

    // Input validation
    if (!name || !email || !amount || !plan) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize the Paystack payment
    const paymentResponse = await initializePaystack(
      email.toLowerCase(),
      amount
    );

    if (!paymentResponse?.reference) {
      throw new Error(
        "Failed to retrieve transaction reference from Paystack."
      );
    }

    const transactionRef = paymentResponse.reference;

    // Record the subscription transaction in Sanity
    const subscription = await createSubscriptions({
      name,
      email,
      amount,
      plan, // Plan ID that references the `pricingTier` schema
      transactionRef,
      status: "pending",
      method: "paystack",
      transactionDate: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, subscription, paymentResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing subscription:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process subscription." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
