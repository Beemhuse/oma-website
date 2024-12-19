import { createDonation } from "@/lib/createDonation";
import { initializePaystack } from "@/lib/paystack";

export async function POST(req) {
    try {
      const body = await req.json();
      const { name, email, amount } = body;
  
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
  
      // Record the donation transaction in Sanity
      const donation = await createDonation({
        name,
        email,
        amount,
        transactionRef,
        status: "pending",
        method: "paystack",
        transactionDate: new Date().toISOString(),
      });
  
      return new Response(
        JSON.stringify({ success: true,donation, paymentResponse }),
        {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error processing donation:", error);
      return new Response(
        JSON.stringify({ error: "Failed to process donation" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  