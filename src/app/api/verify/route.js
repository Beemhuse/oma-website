// import { updateTransactionStatus } from "@/utils/sanity/client";
// import { verifyPaystackPayment } from "@/utils/verify";

// export const dynamic = "force-dynamic";


// export const GET = async (req) => {
//   try {
//     const { searchParams } = new URL(req.url);
//     const trxref = searchParams.get('trxref');

//     const isPaymentVerified = await verifyPaystackPayment(trxref);
//     const newStatus = isPaymentVerified ? 'success' : 'failure';

//     await updateTransactionStatus(trxref, newStatus);

//     if (!isPaymentVerified) {
//       return new Response(JSON.stringify({ error: 'Payment verification failed' }), { status: 400 });
//     }

//     return new Response(JSON.stringify({ success: true, message: "Payment verified" }), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// };


import { updateTransactionStatus } from "@/sanity";
import { verifyPaystackPayment } from "@/utils/verify";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    // Extract the transaction reference from the request URL
    const { searchParams } = new URL(req.url);
    const trxref = searchParams.get('trxref');

    // Ensure the transaction reference is provided
    if (!trxref) {
      return new Response(
        JSON.stringify({ error: "Transaction reference (trxref) is required." }),
        { status: 400 }
      );
    }

    // Verify the payment with Paystack
    const isPaymentVerified = await verifyPaystackPayment(trxref);

    // Determine the new transaction status
    const newStatus = isPaymentVerified ? "completed" : "failed";

    // Update the transaction status in Sanity
    const updateResult = await updateTransactionStatus(trxref, newStatus);

    // Check if the update was successful
    if (!updateResult.success) {
      return new Response(
        JSON.stringify({ error: "Failed to update transaction status.", details: updateResult.message }),
        { status: 500 }
      );
    }

    // Respond with success or failure based on payment verification
    if (isPaymentVerified) {
      return new Response(
        JSON.stringify({ success: true, message: "Payment verified and transaction status updated." }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Payment verification failed.", message: updateResult.message }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in payment verification process:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred.", details: error.message }),
      { status: 500 }
    );
  }
};
