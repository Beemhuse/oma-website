import { Button } from "@/components/component/ui/button";
import Link from "next/link";
import { BiAward, BiBarChart, BiChevronRight, BiCompass } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi2";

export default function LeadershipDevelopmentProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Diagonal Split */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-indigo-800 transform -skew-y-6 origin-top-left"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cultivating Tomorrow&apos;s Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Empowering individuals to lead with vision, integrity, and
              purpose.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-green-100"
            >
              <Link href="#programs" className="flex items-center">
                Explore Our Programs <BiChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Pillars */}
      <section id="programs" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Leadership Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Collaborative Synergy",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: FiTarget,
                title: "Strategic Vision",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: HiLightBulb,
                title: "Innovative Thinking",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                icon: BiCompass,
                title: "Ethical Guidance",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: BiBarChart,
                title: "Performance Excellence",
                color: "bg-red-100 text-red-600",
              },
              {
                icon: BiAward,
                title: "Continuous Growth",
                color: "bg-indigo-100 text-indigo-600",
              },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`${item.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center`}
                >
                  <item.icon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">
                    Developing leaders who excel in {item.title.toLowerCase()}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Journey Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your Leadership Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
            {[
              {
                title: "Self-Discovery",
                description: "Understand your strengths and leadership style",
              },
              {
                title: "Skill Development",
                description: "Enhance core leadership competencies",
              },
              {
                title: "Practical Application",
                description: "Lead projects and initiatives",
              },
              {
                title: "Mentorship",
                description: "Learn from experienced leaders",
              },
              {
                title: "Global Perspective",
                description: "Engage in international leadership forums",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"} md:w-1/2`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-green-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute top-6 -mt-1.5 w-4 h-4 rounded-full bg-purple-600 shadow md:left-1/2 md:ml-1.5"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Hexagon Grid */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Leadership Success Stories
          </h2>
          <div className="flex flex-wrap justify-center">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="w-48 h-52 m-4">
                <div className="w-full h-full bg-gradient-to-br from-green-500 to-red-600 rounded-lg transform rotate-45 overflow-hidden shadow-lg">
                  <div className="w-full h-full transform -rotate-45 flex items-center justify-center p-4">
                    <div className="text-center text-white">
                      <h3 className="font-semibold mb-2">Leader {i}</h3>
                      <p className="text-sm">Transformed their community</p>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Program Stats with Circular Progress */}
      <section
        className="py-20 px-4  text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Leaders Trained", value: 5000 },
              { label: "Countries Reached", value: 50 },
              { label: "Success Rate", value: 95 },
              { label: "Partner Organizations", value: 100 },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-red-500 stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="text-green-300 stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray={`${stat.value * 2.51327}, 251.327`}
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {stat.value}
                      {stat.label === "Success Rate" ? "%" : "+"}
                    </span>
                  </div>
                </div>
                <p className="text-center">{stat.label}</p>
              </div>
            ))}
          </div>
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
      }} className="py-20 px-4 bg-gradient-to-r from-green-600 to-indigo-800 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Unleash Your Leadership Potential
          </h2>
          <p className="text-xl mb-8">
            Join our program and embark on a transformative journey to become
            the leader you&apos;re meant to be.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-green-100"
            >
              <Link href="/get-involved/#volunteer-form">Apply Now</Link>
            </Button>
          
          </div>
        </div>
      </section>
    </div>
  );
}
