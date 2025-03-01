"use client";
import React from "react";
import HeaderSection from "./home/HeaderSection";
// import TrustedClients from "./home/TrustedClients";
import AboutUs from "./home/AboutUs";
import CoreValues from "./home/CoreValues";
import OurBlogs from "./home/OurBlog";
import Testimonies from "./home/Testimonies";
import Donation from "./home/Donate";
import Events from "./home/Events";
import { Button } from "./component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./component/ui/card";
import Link from "next/link";
// import BlackHistory from "./home/black-history";

const OneMapAfrica = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeaderSection />
      {/* <div style={{ width: '100%', position: 'relative' }}>

      <BlackHistory />
</div> */}

      {/* Trusted companies */}
      {/* <TrustedClients /> */}

      {/* about page */}
      <AboutUs />
      {/* our core values */}
      <CoreValues />
      <Events />
      {/* Blog Section */}
      <OurBlogs />

      {/* testimonies  */}
      <Testimonies />

      {/* Donation section  */}
      <Donation />
      <section id="ways-to-help" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-red-500 text-sm font-semibold flex gap-2 mb-2 justify-left items-center transform -translate-x-[54px]">
            <p className="bg-black w-[50px]  h-[2px]"></p> Get Involved
          </div>
          <h2 className="text-3xl font-bold  mb-1">Ways to Get Involved</h2>
          <p className="mt-1 mb-12 text-lg  max-w-3xl">
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
                  <Link href="/get-involved/#volunteer-form">
                    Become a Volunteer
                  </Link>
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
                  <Link href="/get-involved/#social-share">
                    Share Our Mission
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneMapAfrica;
