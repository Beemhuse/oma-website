"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { FaEnvelope, FaHome } from "react-icons/fa";
import axios from "axios";
import { motion } from "motion/react";
import { runFireworks } from "@/lib/canvas";

const Success = () => {
  const [loading, setLoading] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [trxref, setTrxref] = useState(null);
  const [data, setData] = useState(null);

  // Extract trxref from URL query parameters
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const trxRefFromUrl = urlSearchParams.get("trxref");
      setTrxref(trxRefFromUrl);
    }
  }, []);

  // Run fireworks animation after payment verification
  useEffect(() => {
    if (paymentStatus === 200) {
      runFireworks();
    }
  }, [paymentStatus]);

  // Fetch payment verification result and donation details
  useEffect(() => {
    if (trxref) {
      const fetchVerificationResult = async () => {
        setLoading(true);

        try {
          const response = await axios.get(`/api/verify?trxref=${trxref}`);
          setPaymentStatus(response?.status);
          setLoading(false);
          setData(response?.data.data);

          if (response?.status === 200) {
            // Fetch donation details if payment is successful

            setLoading(false);
          }
        } catch (error) {
          setLoading(false);

          console.error("Error verifying payment:", error);
        }
      };

      fetchVerificationResult();
    } else {
      setLoading(false);
    }
  }, [trxref]);
  // Loading state while verifying payment
  if (loading && paymentStatus === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 animate-spin text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2z"
            ></path>
          </svg>
          <p className="mt-4 text-lg text-gray-700">
            Verifying your payment...
          </p>
        </div>
      </div>
    );
  }

  // Show error message if payment verification failed
  if (paymentStatus !== 200) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-4">
            There was an issue verifying your payment. Please try again later.
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Back to Homepage
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }
  console.log(data);
  // Render the success screen with donation data once the payment is successful
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg  text-center max-w-lg w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-green-100 text-green-600 rounded-full p-4">
            <BsBagCheckFill className="text-4xl" />
          </div>
        </motion.div>
        {data.donationPurpose ? (
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Your donation was successful! Thank you for your support.
          </h2>
        ) : (
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Your {data?.subscriptionPlan?.name} subscription was successful!
          </h2>
        )}
        {data && (
          <div className="text-left grid gap-2 text-gray-600 mb-6">
            <p>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Amount:</strong> {data.amount} {data.currency}
            </p>
            <p>
              <strong>Purpose:</strong>{" "}
              {data.donationPurpose
                ? data?.donationPurpose
                : data.subscriptionPlan?.name}
            </p>
            <p>
              <strong>Status:</strong> {data.status}
            </p>
            <p>
              <strong>Transaction Reference:</strong> {data.transactionRef}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(data.transactionDate).toLocaleString()}
            </p>
          </div>
        )}
        <p className="text-gray-600 mb-4 flex items-center justify-center">
          <FaEnvelope className="mr-2" /> Check your email inbox for the
          receipt.
        </p>
        {/* <p className="text-gray-600 mb-6 flex items-center justify-center">
          <FaWhatsapp className="mr-2" /> Track your donation on WhatsApp{" "}
        </p> */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
            >
              <FaHome className="mr-2" /> Back to Homepage
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;
