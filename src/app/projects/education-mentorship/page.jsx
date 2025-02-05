import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/component/ui/button"
import { BiBookOpen, BiTargetLock } from "react-icons/bi"
import { FaAward, FaUsers } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"

export default function EducationMentorshipProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/edu.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateZ(-1px) scale(2)",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />
        <div className="relative z-10 text-center  text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Education & Mentorship</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Empowering minds, shaping futures, and building a brighter tomorrow through knowledge and guidance.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <Link href="#programs" className="flex items-center">
              Explore Our Programs <BsArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BiBookOpen,
                title: "Literacy Initiatives",
                description: "Promoting reading and writing skills across all age groups.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: FaUsers,
                title: "Peer Mentorship",
                description: "Connecting experienced individuals with those seeking guidance.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: BiTargetLock,
                title: "Career Guidance",
                description: "Helping students and young professionals navigate their career paths.",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                icon: FaAward,
                title: "Scholarship Programs",
                description: "Providing financial support to deserving students for higher education.",
                color: "bg-red-100 text-red-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
              >
                <div className={`p-3 rounded-full ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl dark:text-gray-700 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {[
              { year: 2010, title: "Project Launch", description: "Started with 5 schools and 100 students" },
              { year: 2015, title: "Expansion Phase", description: "Reached 50 schools and 5000 students" },
              { year: 2020, title: "Digital Transformation", description: "Launched online mentorship platform" },
              { year: 2025, title: "Global Outreach", description: "Aim to impact 1 million lives worldwide" },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 ${index % 2 === 0 ? "md:ml-auto md:pl-4" : "md:mr-auto md:pr-4"} md:w-1/2`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="font-bold text-green-600 mb-1">{item.year}</div>
                  <h3 className="text-lg dark:text-gray-600 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute top-6 -mt-1.5 w-3 h-3 rounded-full bg-green-600 shadow md:left-1/2 md:ml-1.5"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
          <div className="flex overflow-x-auto space-x-6 pb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=320&text=Success+Story+${i}`}
                  alt={`Success story ${i}`}
                  width={320}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">From Student to CEO</h3>
                  <p className="text-gray-600 mb-4">
                    How our mentorship program helped Alex turn his startup idea into a thriving business.
                  </p>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics with Animation */}
      <section className="py-20 px-4 bg-green-100 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100,000+", label: "Students Educated" },
              { number: "5,000+", label: "Mentors Engaged" },
              { number: "1,000+", label: "Scholarships Awarded" },
              { number: "95%", label: "Program Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-500 bg-opacity-10 p-6 rounded-lg">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Be Part of the Change</h2>
          <p className="text-xl mb-8 text-gray-600">
            Your involvement can make a significant difference in shaping the future of education and mentorship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/get-involved/#volunteer-form">Become a Mentor</Link>
            </Button>
            <Button asChild size="lg"  className="text-green-600 border-green-600 hover:bg-blue-50">
              <Link href="/donations">Support Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

