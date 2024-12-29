"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postRequest } from "@/services/postRequest";
import ActionLoader from "./reusables/ActionLoader";

// Validation schema using Yup
const schema = yup.object({
  name: yup.string().required("Name is required"),
  donationPurpose: yup.string().required("Donation purpose is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  amount: yup
    .number()
    .positive("Amount must be positive")
    .typeError("Please enter a valid number"),
});

const Payment = () => {
  //   const [frequency, setFrequency] = useState("One-time");
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true)
    try{
        const response = await postRequest("/api/donations", data);
        const paymentLink =
        response?.paymentResponse?.authorization_url;
        setLoading(false)
        reset()
      if (paymentLink) {
        window.location.href = paymentLink;
      }
    }
    catch(err){
      setLoading(false)

    }
  };

  return (
    <div className="p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full">
        {/* Frequency Options */}
        {/* <div className="flex justify-center gap-2 mb-6">
          {["One-time", "Monthly", "Quarterly", "Annually"].map((freq) => (
            <button
              key={freq}
              onClick={() => handleFrequencyChange(freq)}
              className={`px-4 py-2 rounded border ${
                frequency === freq ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {freq}
            </button>
          ))}
        </div> */}

        <form onSubmit={handleSubmit(onSubmit)} className="dark:text-black">
          {/* Name Field */}
          <div className="mb-4 ">
            <label className="block font-normal mb-2">Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              className={`w-full border p-2 rounded ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block font-normal mb-2">Email Address</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email address"
              className={`w-full border p-2 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Preset Donation Amounts */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[25, 50, 100, 250].map((presetAmount) => (
              <button
                key={presetAmount}
                type="button"
                onClick={() => setValue("amount", presetAmount)}
                className={`px-4 py-2 rounded border ${
                  watch("amount") === presetAmount
                    ? "bg-[#3CB064] text-white"
                    : "bg-gray-200"
                }`}
              >
                GHS {presetAmount}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="mb-6">
            <label className="block font-normal mb-2">Custom Amount</label>
            <input
              type="text"
              {...register("amount")}
              placeholder="$ Custom Amount"
              className={`w-full border p-2 rounded ${
                errors.amount ? "border-red-500" : ""
              }`}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.amount.message}
              </p>
            )}
          </div>
          {/* Puspose Input */}
          <div className="mb-6">
            <label className="block font-normal mb-2">Donation Purpose</label>
            <textarea
              type="text"
              {...register("donationPurpose")}
              placeholder="donation purpose"
              className={`w-full border p-2 rounded ${
                errors.donationPurpose ? "border-red-500" : ""
              }`}
            ></textarea>
            {errors.donationPurpose && (
              <p className="text-red-500 text-sm mt-1">
                {errors.donationPurpose.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-black flex items-center justify-center border border-[#3CB064] rounded-xl gap-4 py-2"
            style={{
              backgroundImage: 'url("/paystack.png")',
              backgroundSize: "20px 20px", // Adjust the size of the image
              backgroundPosition: "center center", // Position the image to the left
              backgroundRepeat: "no-repeat", // Ensure the image does not repeat
            }}
          >
            <span className="pl-[60px]">Next →</span>{" "}
            {/* Add padding on the left to prevent text overlap */}
          </button>
        </form>
      </div>
                <ActionLoader isVisible={isLoading} />
    </div>
  );
};

export default Payment;
