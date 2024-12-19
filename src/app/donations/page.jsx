"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postRequest } from "@/services/postRequest";
import toast from "react-hot-toast";
import CircularLoader from "@/components/component/loaders/CircularLoader";
import { FaRegCircle } from "react-icons/fa6";
import Payment from "@/components/Payment";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^(\+234|0)[0-9]{10}$/, "Invalid phone number format")
    .notRequired(),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("credit card");

  const renderTabContent = () => {
    switch (activeTab) {
      case "credit card":
        return (
         <Payment />
        );
      case "bank transfer":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Bank Transfer Details
            </h3>
            <p>Transfer the amount to the NGO&apos;s account:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Bank Name: ABC Bank</li>
              <li>Account Name: NGO Fund</li>
              <li>Account Number: 1234567890</li>
              <li>SWIFT Code: ABCD1234</li>
            </ul>
          </div>
        );
      case "cheque":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Cheque Payment</h3>
            <p>Please send your cheque to the following address:</p>
            <p className="mt-2">123 NGO Street, City, Country</p>
          </div>
        );
      default:
        return null;
    }
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await postRequest("/api/contact", data);
      toast.success("Message sent successfully!");

      setIsLoading(false);
      reset();
    } catch (err) {
      setIsLoading(false);
      toast.error(err.message || "failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="m-full mx-auto flex gap-5 ">
        {/* Contact Information */}
        <div className="w-1/3 flex flex-col items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Payment Information
            </h2>

            <ol class="relative border-s  border-gray-600 dark:border-gray-700">
              <li
                className="mb-10 ms-4 cursor-pointer"
                onClick={() => setActiveTab("credit card")}
              >
                <div
                  className={`absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border -top-2 dark:border-gray-900 dark:bg-gray-700 ${
                    activeTab === "credit card"
                      ? "bg-red-500 border-red-500"
                      : "bg-white border-gray-300"
                  }`}
                ></div>
                <h3 className="mb-1 font-bold leading-none text-[19px] text-black dark:text-gray-500">
                  Credit card
                </h3>
                <p className="mt-10 text-base font-normal text-gray-500 dark:text-gray-400">
                  Pay with your card.
                </p>
              </li>

              <li
                className="mb-10 ms-4 cursor-pointer"
                onClick={() => setActiveTab("bank transfer")}
              >
                <div
                  className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-2  dark:border-gray-900 dark:bg-gray-700
        ${
          activeTab === "bank transfer"
            ? "bg-red-500 border-red-500"
            : "bg-white border-gray-300"
        }`}
                ></div>
                <h3 className="mb-1 font-bold leading-none text-[19px] text-black dark:text-gray-500">
                  Bank Transfer
                </h3>
                <p className="text-base mt-10 font-normal text-gray-500 dark:text-gray-400">
                  Transfer to the NGO&apos;s account.
                </p>
              </li>

              <li
                className="ms-4 cursor-pointer"
                onClick={() => setActiveTab("cheque")}
              >
                <div
                  className={`absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border-2  dark:border-gray-900 dark:bg-gray-700 
        ${
          activeTab === "cheque"
            ? "bg-red-500 border-red-500"
            : "bg-white border-gray-300"
        }`}
                ></div>
                <h3 className="mb-1 font-bold leading-none text-[19px] text-black dark:text-gray-500">
                  Cheque
                </h3>
                <p className="text-base mt-10 font-normal text-gray-500 dark:text-gray-400">
                  Pay using Bank cheque.
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
          {renderTabContent()}
        </div>

        {/* <div className="bg-white p-8 rounded-[32px] shadow-lg w-2/3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                {...register("name")}
                className={`mt-2 block w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm outline-none`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                {...register("email")}
                className={`mt-2 block w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="NG +234"
                {...register("phone")}
                className={`mt-2 block w-full p-3 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm outline-none`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter Message Subject"
                {...register("subject")}
                className={`mt-2 block w-full p-3 border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm outline-none`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your Message here"
                rows="4"
                {...register("message")}
                className={`mt-2 block w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm outline-none resize-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-fit py-3 px-6 bg-red-600 text-white font-medium flex justify-center items-center text-sm rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {isLoading ? <CircularLoader /> : "Send"}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 text-right">
            <a href="#" className="text-gray-700 underline">
              Privacy Policy
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
