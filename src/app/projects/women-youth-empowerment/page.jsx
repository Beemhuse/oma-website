"use client"
import { Button } from "@/components/component/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BiChevronRight } from "react-icons/bi"
import useCountUp from "@/hooks/useCountup";
import { FaBook, FaBriefcase, FaStar, FaHeart } from "react-icons/fa"

const stats = [
    { number: "2000", label: "Women Empowered" },
    { number: "1000", label: "Youth Trained" },
    { number: "500", label: "Businesses Started" },
    { number: "50", label: "Communities Reached" },
  ]

  const StatsGrid = ({ stats }) => {
    const count = useCountUp(0, stats.number);
return(
    <div >
    <p className="text-4xl md:text-5xl font-bold mb-2">{count}+</p>
    <p className="text-lg">{stats.label}</p>
  </div>
)
  }


export default function WomenYouthEmpowermentProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-green-50">
      {/* Hero Section */}
      <section className="relative xl:py-20 xl:px-4 overflow-hidden">
        <div className="max-w-6xl bg-black p-8 mx-auto">
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-600">
              Empowering Women & Youth
            </h1>
            <p className="text-xl mb-8 text-white dark:text-white max-w-2xl mx-auto">
              Unleashing potential, fostering leadership, and creating opportunities for a brighter future.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-green-600 text-white hover:from-purple-700 hover:to-green-700"
            >
              <Link href="#initiatives" className="flex items-center gap-3">
                Explore Our Initiatives <BiChevronRight size={20} className="ml-2 " />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center opacity-30 overflow-hidden">
          <Image
            src="/women.jpg"
            alt="Women empowerment"
            width={600}
            height={600}
            className="object-cover w-full"
          />
          <Image
            src="/team.svg"
            alt="Youth empowerment"
            width={600}
            height={600}
            className="object-cover w-full"
          />
        </div>
      </section>

      {/* Key Initiatives */}
      <section id="initiatives" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Key Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaStar,
                title: "Leadership Development",
                description: "Nurturing future leaders through mentorship programs and workshops.",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: FaBook,
                title: "Education Access",
                description: "Providing scholarships and resources to support continuous learning.",
                color: "from-pink-500 to-pink-700",
              },
              {
                icon: FaBriefcase,
                title: "Economic Empowerment",
                description: "Offering skills training and microfinance opportunities for entrepreneurs.",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: FaHeart,
                title: "Health & Well-being",
                description: "Promoting access to healthcare and mental health support services.",
                color: "from-pink-500 to-pink-700",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Impact Stories</h2>
          <div className="flex flex-nowrap overflow-x-auto gap-6 pb-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex-none w-80 bg-gradient-to-b from-purple-100 to-green-100 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=320&text=Story+${i}`}
                  alt={`Impact story ${i}`}
                  width={320}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Transforming Lives</h3>
                  <p className="text-gray-600 mb-4">
                    How our program helped Sarah start her own business and become a community leader.
                  </p>
                  <Button variant="outline" asChild className="w-full justify-center">
                    <Link href={`/stories/${i}`}>Read Full Story</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
             <StatsGrid stats={stat} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Movement</h2>
          <p className="text-xl mb-8 text-gray-600">
            Be part of the change. Together, we can create a world where every woman and youth has the opportunity to
            thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white border-2 border-green-500 text-black">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
            <Button asChild className="bg-white border-2 border-green-500 text-black">
              <Link href="/donate">Donate</Link>
            </Button>
            <Button asChild  className="bg-white border-2 border-green-500 text-black">
              <Link href="/partner">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

