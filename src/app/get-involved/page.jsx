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

export default function GetInvolved() {
  const rightRef = useSlideInAnimation("right", 1000, 200);
  return (
    <div className="bg-gray-50">
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
        <p className="mt-6 text-xl text-center m-auto max-w-3xl">
          Join us in our mission to create a unified map of Africa. Your support
          can make a real difference in improving lives and fostering
          sustainable development.
        </p>
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Ways to Get Involved
          </h2>
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
                  <Link href="/donate">Make a Donation</Link>
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

          // backgroundColor: "rgba(0, 74, 13, 0.5)", // Adds a black overlay
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Volunteer with Us
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <Input
                  id="first-name"
                  name="first-name"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <Input
                  id="last-name"
                  name="last-name"
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700"
              >
                Skills
              </label>
              <Input
                id="skills"
                name="skills"
                placeholder="e.g., GIS, Data Analysis, Community Outreach"
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea id="message" name="message" rows={4} className="mt-1" />
            </div>
            <div>
              <Button
                type="submit"
                className=" w-fit m-auto bg-red-500 text-white "
              >
                Submit
              </Button>
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
              >
                Share on Twitter
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://www.facebook.com/sharer/sharer.php?u=https://onemapafricawebsite.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://onemapafricawebsite.com&title=Support%20One%20Map%20Africa&summary=Join%20me%20in%20supporting%20One%20Map%20Africa%20to%20create%20a%20unified%20map%20of%20the%20continent!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
