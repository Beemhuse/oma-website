"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card } from "./Card";
import { Button } from "./Button";
import { CheckIcon } from "./CheckIcon";
import { postRequest } from "@/services/postRequest";
import { fetchPlans } from "@/services/apiService";
import { Input } from "../component/ui/input";
import ActionLoader from "../reusables/ActionLoader";
import toast from "react-hot-toast";

const subscriptionSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .email("Enter a valid email.")
    .required("Email is required."),
  // plan: yup.string().required('Please select a plan.'),
});

export function PricingTable() {
  const [tiers, setTiers] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [isAnnual, setIsAnnual] = useState(true);
  const [submissionError, setSubmissionError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [planId, setPlanId] = useState("");
  const [price, setPrice] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(subscriptionSchema),
  });

  const openModal = (id, price) => {
    setIsModalOpen(true);
    setPlanId(id);
    setPrice(price);
  };
  useEffect(() => {
    const getPlans = async () => {
      try {
        const res = await fetchPlans();
        setTiers(res);
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      } finally {
        setLoadingPlans(false);
      }
    };
    getPlans();
  }, []);

  const onSubmit = async (formData) => {
    setSubmissionError(null);
    setLoading(true);

    try {
      const response = await postRequest("/api/subscriptions", {
        ...formData,
        plan: planId,
        amount: price,
      });
      const paymentLink =
      response?.paymentResponse?.authorization_url;
      toast.success("Subscription successful! 🎉");
      reset();
      setLoading(false);
      setIsModalOpen(false);
      if (paymentLink) {
        window.location.href = paymentLink;
      }
    } catch (error) {
      setSubmissionError(error.message || "An error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="py-12 px-4">
      {/* Billing Toggle */}
      <div className="flex justify-center gap-2 mb-8">
        <div className="inline-flex items-center rounded-full border bg-white  p-1 text-sm">
          {/* <button
            onClick={() => setIsAnnual(false)}
            className={`rounded-full px-4 py-2 transition-colors ${
              !isAnnual ? "bg-green-950 text-white" : "hover:bg-green-50"
            }`}
          >
            Billed Monthly
          </button> */}
          <button
            // onClick={() => setIsAnnual(true)}
            className={`rounded-full px-4 py-2 transition-colors 
               bg-green-950 text-white
            `}
          >
            Billed Annually
          </button>
        </div>
      </div>

      {loadingPlans ? (
        <p>Loading plans...</p>
      ) : (
        <div>
          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-2  w-full m-auto lg:grid-cols-4">
            {tiers?.map((tier) => (
              <Card
                key={tier._id}
                className={
                  tier.highlighted ? "bg-green-950 text-white" : "bg-white dark:bg-black"
                }
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-5xl font-bold">
                      {/* {isAnnual ? tier.priceAnnual : tier.priceMonthly} */}
                      {tier?.price}
                    </span>
                    <span className="ml-1 text-sm">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm mb-6">
                    {tier?.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon className="h-5 w-5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => openModal(tier._id, tier?.price)}
                    className="w-full bg-green-950 text-white hover:bg-green-900"
                  >
                    Select Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Subscribe to a Plan</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  // id="name"
                  type="text"
                  {...register("name")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-950 focus:ring-green-950 sm:text-sm"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  // id="email"
                  type="email"
                  {...register("email")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-950 focus:ring-green-950 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submission Error */}
              {submissionError && (
                <p className="text-red-600 text-sm mt-4">{submissionError}</p>
              )}

              <div className="mt-6 flex gap-4">
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-gray-300 text-gray-700 hover:bg-gray-400"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-full bg-green-950 text-white hover:bg-green-900"
                >
                  Subscribe
                </Button>
                <ActionLoader isVisible={isLoading} />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
