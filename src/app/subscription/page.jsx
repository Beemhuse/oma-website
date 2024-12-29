import Subscription from "@/components/pages/Subscription";
import React from "react";
// components/AdditionalBenefitsTable.js
const AdditionalBenefitsTable = () => {
  return (
    <div className="overflow-x-auto bg-[007A15] dark:bg-inherit">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="">
            <th className="px-4 py-2 border border-gray-200 text-left font-medium  text-gray-600 dark:text-white">
              Tier
            </th>
            <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-600 dark:text-white">
              Included
            </th>
            <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-600 dark:text-white">
              Benefits
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-200 font-medium text-gray-800 dark:text-white">
              Premium
            </td>
            <td className="px-4 py-2 border border-gray-200 text-center">
              <span className="text-green-500 font-bold">✓</span>
            </td>
            <td className="px-4 py-2 border border-gray-200 text-gray-800 dark:text-white">
              Access to NGO&apos;s network of professionals and experts
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200 font-medium text-gray-800 dark:text-white">
              Silver
            </td>
            <td className="px-4 py-2 border border-gray-200 text-center">
              <span className="text-green-500 font-bold">✓</span>
            </td>
            <td className="px-4 py-2 border border-gray-200 text-gray-800 dark:text-white">
              Opportunities for professional development and training
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200 font-medium dark:text-white text-gray-800">
              Gold
            </td>
            <td className="px-4 py-2 border border-gray-200 text-center">
              <span className="text-green-500 font-bold">✓</span>
            </td>
            <td className="px-4 py-2 border border-gray-200 dark:text-white text-gray-800">
              Discounts on products and services from partner organizations
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200 dark:text-white font-medium text-gray-800">
              Diamond
            </td>
            <td className="px-4 py-2 border border-gray-200 text-center">
              <span className="text-green-500 font-bold">✓</span>
            </td>
            <td className="px-4 py-2 border border-gray-200 dark:text-white text-gray-800">
              Recognition on NGO&apos;s social media channels
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function page() {
  return (
    <div>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8  text-white"
        style={{
          backgroundImage: "url(/bg-layout.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center xl:text-4xl text-xl">Subscription</h1>
      </section>
      <div className="container m-auto">
        <Subscription />
        <div className="p-6">
          <h2 className="text-2xl font-normal mb-4">Additional Benefits</h2>
          <AdditionalBenefitsTable />
        </div>{" "}
      </div>
    </div>
  );
}
