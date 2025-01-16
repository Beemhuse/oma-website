"use client";
import React, { useState } from "react";
import Payment from "@/components/Payment";
import useSlideInAnimation from "@/hooks/slideAnimation";

export default function Page() {
  const [activeTab, setActiveTab] = useState("credit card");
  const leftRef = useSlideInAnimation('left', 1000);
  const rightRef = useSlideInAnimation('right', 1000, 200);
  const renderTabContent = () => {
    switch (activeTab) {
      case "credit card":
        return <Payment />;
      case "bank transfer":
        return (
          <div>
            <h3 className="text-xl font-semibold dark:text-black mb-4">
              Bank Transfer Details
            </h3>
            <p className="dark:text-black">Transfer the amount to the NGO&apos;s account:</p>
            <ul className="list-disc dark:text-black pl-6 mt-2">
              <li>Bank Name: Ecobank Ghana Limited</li>
              <li>Account Name: One Map Africa LBG</li>
              <li>Account Number: 1441004115273</li>
              <li>SWIFT Code: ECOCGHAC</li>
            </ul>
          </div>
        );
      case "cheque":
        return (
          <div className="dark:text-black">
            <h3 className="text-xl font-semibold mb-4 dark:text-black">Cheque Payment</h3>
            {/* <p>Please send your cheque to the following address:</p>
            <p className="mt-2">123 NGO Street, City, Country</p> */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8  text-white"
        style={{
          backgroundImage: "url(/bg-layout.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center font-[600] xl:text-2xl text-xl">
          Donations
        </h1>
      </section>
      <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex gap-5 xl:flex-row flex-col ">
          {/* Contact Information */}
          <div ref={leftRef} className="xl:w-1/3 w-full flex flex-col items-center">
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
          <div ref={rightRef} className="xl:w-2/3 w-full bg-white p-6 rounded-lg shadow-lg">
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
    </>
  );
}
