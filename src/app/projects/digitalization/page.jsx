import Image from "next/image"
import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Laptop, Wifi, Users, BarChart } from "lucide-react"
import { Button } from "@/components/component/ui/button"
import { BsArrowRight } from "react-icons/bs"
import { FaLaptop, FaChartBar, FaWifi, FaUsers } from "react-icons/fa";

export default function DigitalizationProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-400 to-green-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse gap-y-6 md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bridging the Digital Divide</h1>
            <p className="text-xl mb-6">Empowering communities through technology and digital literacy</p>
            <Button asChild className="bg-white  text-green-600 hover:bg-gray-100">
              <Link href="#learn-more" className="flex items-center">
                Learn More <BsArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/landingPage/img3.jpg"
              alt="Digital empowerment illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="learn-more" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold dark:text-black text-center mb-12">Our Digitalization Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaLaptop,
                title: "Digital Skills Training",
                description: "Comprehensive courses on computer literacy, internet usage, and digital tools",
              },
              {
                icon: FaWifi,
                title: "Internet Access",
                description: "Establishing community internet hubs and Wi-Fi zones in rural areas",
              },
              {
                icon: FaUsers,
                title: "Online Education",
                description: "Facilitating access to online learning platforms and resources",
              },
              {
                icon: FaChartBar,
                title: "Data Empowerment",
                description: "Teaching data analysis and visualization for informed decision-making",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-neutral-600 p-6 rounded-lg shadow-md text-center">
                <item.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "People Trained" },
              { number: "200", label: "Community Hubs" },
              { number: "75%", label: "Employment Rate" },
              { number: "30", label: "Partner Organizations" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.number}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold dark:text-black text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Success+Story+${i}`}
                  alt={`Success story ${i}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold dark:text-black mb-2">From Novice to Tech Entrepreneur</h3>
                  <p className="text-gray-600 dark:text-black mb-4">
                    Maria&apos;s journey from a rural village to launching her own tech startup, empowered by our digital
                    skills program.
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Get Involved */}
      <section
        style={{
            backgroundImage: "url(/landingPage/africa.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "overlay",
          }} className=" text-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Digital Revolution</h2>
          <p className="text-xl mb-8">
            Whether you&apos;re a tech expert, a potential sponsor, or someone passionate about bridging the digital divide,
            we have a place for you in our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-black border-2 border-green-500 hover:bg-gray-100">
              <Link href="/get-involved/#volunteer-form">Volunteer</Link>
            </Button>
            <Button asChild className="bg-transparent border-2  border-green-500 hover:bg-white hover:text-green-600">
              <Link href="/donations">Donate</Link>
            </Button>
            <Button asChild className="bg-transparent border-2  border-green-500 hover:bg-white hover:text-green-600">
              <Link href="/subscription">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

