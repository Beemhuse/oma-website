"use client";
import { Button } from "@/components/component/ui/button";
import useSlideInAnimation from "@/hooks/slideAnimation";
import useCountUp from "@/hooks/useCountup";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { end: 10, description: "Farmers Trained" },
  { end: 5000, description: "Hectares Cultivated" },
  { end: 2000, description: "in Farmer Income", prefix: "$" },
  { end: 30, description: "Partner Organizations" },
];

const StatsGrid = ({ stats }) => {
  const count = useCountUp(0, stats.end);
  return (
    <div className="bg-green-100 p-6 rounded-lg">
      <p className="text-3xl font-bold text-green-700">
        {stats.prefix || ""}
        {count.toLocaleString()}
      </p>
      <p className="text-gray-700">{stats.description}</p>
    </div>
  );
};

export default function AgribusinessProject() {
  const leftRef = useSlideInAnimation("left", 1000);
  const rightRef = useSlideInAnimation("right", 1000, 200);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] p-4 min-h-[400px]">
        <Image
          src="/agriculture.jpg"
          alt="Farmers working in a lush green field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug max-w-3xl text-center">
            Empowering Rural Communities Through Agribusiness & Food Security 
          </h1>
        </div>
      </section>

      {/* Project Description */}
      <section className="flex justify-around flex-col md:flex-row gap-12 py-16 px-4 md:px-8  mx-auto">
        {/* <div className=""> */}

        <div ref={leftRef} className="md:w-2/5">
          <div className="flex gap-8 mb-2 items-center">
            <h2 className="text-2xl md:text-3xl dark:text-black font-bold mb-6 text-center">Our Mission</h2>
            <p className="w-24 h-1 rounded-full bg-black  dark:bg-white"></p>
          </div>

          <p className="text-lg mb-8 text-gray-700">
            Agriculture remains the backbone of many African economies,
            providing livelihoods for millions. At One Map Africa (OMA), we are
            committed to strengthening food security through innovative
            agribusiness initiatives. Our projects focus on sustainable farming
            practices, climate-smart agriculture, and empowering smallholder
            farmers with the tools and knowledge needed to increase
            productivity. We collaborate with stakeholders to facilitate access
            to financing, markets, and modern agricultural technologies that
            drive efficiency and improve food security across Africa. By
            investing in agribusiness, we aim to create economic opportunities
            and ensure long-term resilience against food crises.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold dark:text-black mb-4">Goals</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Increase crop yields by 50% within 3 years</li>
                <li>
                  Implement sustainable farming practices in 100 communities
                </li>
                <li>Connect 1000+ farmers to international markets</li>
                <li>Reduce post-harvest losses by 30%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-black mb-4">Impact</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Improved food security for over 50,000 families</li>
                <li>30% increase in average household income</li>
                <li>Creation of 500+ jobs in agro-processing</li>
                <li>Reduction in rural-urban migration by 25%</li>
              </ul>
            </div>
          </div>
        </div>
        <div ref={rightRef} className="p-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl dark:text-black md:text-3xl font-bold mb-6 text-center">
              Key Initiatives
            </h2>
            <p className="w-24 h-1 rounded-full bg-black  dark:bg-white"></p>
          </div>
          <ul className="list-disc dark:text-black space-y-4 mt-10">
            <li>Training programs for farmers on sustainable agriculture</li>
            <li>Support for agribusiness startups and cooperatives</li>
            <li>Access to microfinance and investment opportunities</li>
            <li>Climate-smart agriculture research and implementation</li>
          </ul>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-800">
        <h2 className="text-3xl font-bold  mb-8 text-center">Project Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="relative h-64 overflow-hidden rounded-lg group"
            >
              <Image
                src={`/agriculture.jpg`}
                alt={`Project image ${i}`}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl dark:text-black font-bold mb-8 text-center">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-4  gap-4">
          {stats.map((item, index) => (
            <StatsGrid key={index} stats={item} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundImage: "url(/landingPage/africa.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}
        className="py-16     text-center"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl dark:text-black font-bold mb-4">Support Our Mission</h2>
          <p className="mb-8 dark:text-black text-lg">
            Join us in empowering rural communities and building a sustainable
            future through agribusiness. Your support can make a real
            difference.
          </p>
          <div className="space-x-4">
            <Button asChild className="border-2 dark:text-black border-green-500">
              <Link href="/donations">Donate Now</Link>
            </Button>
            <Button  asChild className="border-2 dark:text-black border-green-500">
              <Link href="/get-involved/#volunteer-form">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
