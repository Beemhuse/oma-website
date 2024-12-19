"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { OtpInput } from "reactjs-otp-input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CircularLoader from "@/components/component/loaders/CircularLoader";
import { useAuthStore } from "@/store/authStore";
import { postRequest } from "@/services/postRequest";

const Page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const email = useAuthStore((state) => state.email); // Retrieve email from auth store
  const { push } = useRouter();

  const handleChange = (value) => {
    setOtp(value);
  };

  const onSubmit = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await postRequest("/api/auth/verify-otp", {
        otp,
        email,
      });
      toast.success(response.message);
      setIsLoading(false);
      push("login");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "An error occurred.");
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div
        className="h-36 bg-cover mb-4 bg-center flex items-center px-6"
        style={{
          backgroundImage: `url('/images/organic.jpeg')`, 
        }}
      >
        {/* Breadcrumbs */}
        <nav className="text-sm text-white">
          <ul className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-green-200">Verify</li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center my-10">
        <div className="bg-white p-8 rounded border shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Verify Your Email
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter the 6-digit OTP sent to your email address.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* OTP Input */}
            <div className="mb-4">
              <OtpInput
                value={otp}
                onChange={handleChange}
                containerStyle="flex mt-4 justify-center space-x-4"
                isInputNum
                focusStyle="border-green-500 outline-none"
                shouldAutoFocus
                isInputSecure
                inputStyle={{
                  width: "40px",
                  borderRadius: "10px",
                  height: "40px",
                  border: "1px solid gray",
                }}
                numInputs={6}
              />
              {errors.otp && (
                <p className="text-red-600 text-sm mt-1">{errors.otp.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white flex items-center justify-center rounded-md hover:bg-green-600 transition duration-200"
            >
              {isLoading ? <CircularLoader /> : "Verify OTP"}
            </button>
          </form>

          {/* Resend OTP Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Didn&apos;t receive the OTP?{" "}
            <a href="#" className="text-green-600 font-medium hover:underline">
              Resend OTP
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
