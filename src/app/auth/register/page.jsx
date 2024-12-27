"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CircularLoader from "@/components/component/loaders/CircularLoader";
import { useAuthStore } from "@/store/authStore";
import { postRequest } from "@/services/postRequest";

// Validation schema using Yup
const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const setEmail = useAuthStore((state) => state.setEmail); // Use store to set email
  const { push } = useRouter(); // For navigation
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await postRequest("/api/auth/register", {
        email: data.email,
        password: data.password,
      });
      setEmail(data.email);
      toast.success(response.message);
      setIsLoading(false);
      push("/auth/verify");
    } catch (err) {
      toast.error(err.message || "An error occurred");
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div
        className="h-36 bg-cover mb-4 bg-center flex items-center px-6"
        style={{
          backgroundImage: `url('/images/organic.jpeg')`, // Replace with your actual image path
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
            <li className="text-green-200">Register</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-center my-10">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                label="Email"
                className={`w-full border rounded-md p-2 text-sm focus:outline-none focus:ring ${
                  errors.email ? 'border-red-500' : 'focus:ring-green-200'
                }`}
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                label="Password"
                className={`w-full border rounded-md p-2 text-sm focus:outline-none focus:ring ${
                  errors.password ? 'border-red-500' : 'focus:ring-green-200'
                }`}
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                className={`w-full border rounded-md p-2 text-sm focus:outline-none focus:ring ${
                  errors.confirmPassword ? 'border-red-500' : 'focus:ring-green-200'
                }`}
                placeholder="Re-enter your password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className="form-checkbox h-4 w-4 text-green-600"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Accept all terms & Conditions
                </span>
              </label>
              {errors.terms && (
                <p className="text-red-600 text-sm mt-1">{errors.terms.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white flex items-center justify-center rounded-md hover:bg-green-600 transition duration-200"
            >
              {isLoading ? <CircularLoader /> : "Create Account"}
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
