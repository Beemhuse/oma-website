"use client";
import Image from "next/image";
import Link from "next/link";
import { Textarea } from "@/components/component/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/component/ui/card";
import { Button } from "@/components/component/ui/button";
import { Input } from "@/components/component/ui/input";
import useSlideInAnimation from "@/hooks/slideAnimation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { postRequest } from "@/services/postRequest";
import toast from "react-hot-toast";
import ActionLoader from "@/components/reusables/ActionLoader";

// Validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  skills: Yup.string().required("Skills are required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function GetInvolved() {
  const rightRef = useSlideInAnimation("right", 1000, 200);
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await postRequest("/api/volunteer", { data });
      toast.success(
        "Form submitted successfully. Thank you for volunteering with us."
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-inherit">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8  text-white"
        style={{
          backgroundImage: "url(/bg-layout.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center  xl:text-4xl text-xl">
          Get Involved with One Map Africa
        </h1>
        {/* <p>
          At One Map Africa, we believe that collective efforts lead to greater
          impact. We offer numerous opportunities for individuals,
          organizations, and businesses to get involved and support our mission
          of fostering unity and sustainable development across Africa. Whether
          you&apos;re interested in joining our network of proactive changemakers,
          volunteering your time, providing financial support, or partnering
          with us on specific projects, your involvement can make a significant
          difference.
        </p> */}
      </section>
      <div className="absolute bottom-0 right-0 lg:block hidden">
        <Image
          src="/landingPage/africa.png"
          alt="Map of Africa"
          width={300}
          height={300}
          className="opacity-20"
        />
      </div>

      {/* Ways to Get Involved Section */}
      <section id="ways-to-help" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-1">
            Ways to Get Involved
          </h2>
          <p className="mt-1 mb-12 text-lg text-center m-auto max-w-3xl">
            Join us in our mission to create a unified map of Africa. Your
            support can make a real difference in improving lives and fostering
            sustainable development.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Contribute your skills and time to help map communities and
                  support our projects.
                </p>
                <Button asChild>
                  <Link href="#volunteer-form">Become a Volunteer</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Your financial support helps us expand our mapping efforts and
                  reach more communities.
                </p>
                <Button asChild>
                  <Link href="/donations">Make a Donation</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Spread Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Share our mission with your network and help us reach more
                  people.
                </p>
                <Button asChild>
                  <Link href="#social-share">Share Our Mission</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section
        id="volunteer-form"
        className="py-16 px-4 sm:px-6 lg:px-8 "
        style={{
          backgroundImage: "url(/landingPage/africa.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Volunteer with Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  First Name
                </label>
                <Input
                  id="first-name"
                  name="firstName"
                  {...register("firstName")}
                  className="mt-1 input-class"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Last Name
                </label>
                <Input
                  id="last-name"
                  name="lastName"
                  {...register("lastName")}
                  className="mt-1 input-class"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                {...register("email")}
                className="mt-1 input-class"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Skills
              </label>
              <Input
                id="skills"
                name="skills"
                {...register("skills")}
                placeholder="e.g., GIS, Data Analysis, Community Outreach"
                className="mt-1 input-class"
              />
              {errors.skills && (
                <p className="text-red-500 text-sm">{errors.skills.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                {...register("message")}
                className="mt-1 input-class"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-fit m-auto bg-red-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social Share Section */}
      <section id="social-share" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Spread the Word</h2>
          <p className="text-xl mb-8">
            Help us reach more people by sharing our mission on social media.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link
                href="https://twitter.com/intent/tweet?text=Join%20me%20in%20supporting%20One%20Map%20Africa%20to%20create%20a%20unified%20map%20of%20the%20continent!%20%23OneMapAfrica"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#FFD700]  text-red-500"
              >
                Share on Twitter
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.onemapafrica.org"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#FFD700] text-red-500 "
              >
                Share on Facebook
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.onemapafrica.org"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#FFD700] text-red-500"
              >
                Share on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <ActionLoader isVisible={isLoading} />
    </div>
  );
}
