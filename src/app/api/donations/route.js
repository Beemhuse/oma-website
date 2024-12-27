import { createDonation } from "@/lib/createDonation";
import { createTransaction } from "@/lib/createTransaction";
import { initializePaystack } from "@/lib/paystack";
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, amount, donationPurpose } = body; // Include donationPurpose if needed

    // Input validation
    if (!name || !email || !amount || !donationPurpose) {
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

    // Save the transaction in Sanity
    const transaction = await createTransaction({
      type: "donation",
      name,
      email,
      amount,
      currency: "GHS", // Replace with the appropriate currency if needed
      transactionRef,
      status: "pending",
      method: "paystack",
      donationPurpose, // Reference to the purpose of the donation
    });

    if (transaction.error) {
      throw new Error(transaction.message);
    }

    // Record the donation transaction in Sanity
    const donation = await createDonation({
      name,
      email,
      amount,
      transactionRef,
      status: "pending",
      method: "paystack",
      transactionDate: new Date().toISOString(),
      donationPurpose, // Pass the purpose of the donation if needed
    });

    return new Response(
      JSON.stringify({ success: true, donation, paymentResponse, transaction }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing donation:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process donation.",
        message: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}