import Image from "next/image";
import Link from "next/link";
import { BiBattery, BiDroplet, BiLeaf, BiSun, BiWind } from "react-icons/bi";
import { Button } from "@/components/component/ui/button";
import { BsArrowRight } from "react-icons/bs";

export default function RenewableEnergyProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <BiSun className="h-16 w-16 text-yellow-400" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float animation-delay-2000">
            <BiWind className="h-16 w-16 text-blue-400" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float animation-delay-4000">
            <BiDroplet className="h-16 w-16 text-blue-500" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-float animation-delay-6000">
            <BiLeaf className="h-16 w-16 text-green-500" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Powering the Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Renewable Energy
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600">
            Harnessing nature&apos;s power for a sustainable tomorrow.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600"
          >
            <Link href="#initiatives" className="flex items-center ">
              Explore Our Initiatives <BsArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Energy Sources Section */}
      <section id="initiatives" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Energy Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BiSun,
                title: "Solar Power",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: BiWind,
                title: "Wind Energy",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: BiDroplet,
                title: "Hydropower",
                color: "from-blue-300 to-blue-500",
              },
              {
                icon: BiLeaf,
                title: "Biomass",
                color: "from-green-400 to-green-600",
              },
              {
                icon: BiBattery,
                title: "Energy Storage",
                color: "from-purple-400 to-purple-600",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div
                      className={`inline-block p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl dark:text-gray-700 font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      Harnessing the power of {item.title.toLowerCase()} for a
                      cleaner future.
                    </p>
                  </div>
                  {/* <Button variant="link" asChild className="mt-4">
                    <Link
                      href={`/energy/${item.title.toLowerCase().replace(" ", "-")}`}
                    >
                      Learn More
                    </Link>
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Energy Map */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Global Impact
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-center">
              <p className="text-gray-500 text-lg">
                Interactive Energy Map Placeholder
              </p>
            </div>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Explore our renewable energy projects across the globe.
          </p>
        </div>
      </section> */}

      {/* Energy Production Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Energy Production
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Solar", value: "500 MW", icon: BiSun },
              { label: "Wind", value: "750 MW", icon: BiWind },
              { label: "Hydro", value: "300 MW", icon: BiDroplet },
              { label: "Biomass", value: "150 MW", icon: BiLeaf },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 p-6 rounded-lg text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Success Stories
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=320&text=Energy+Project+${i}`}
                  alt={`Energy project ${i}`}
                  width={320}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl dark:text-gray-700 font-semibold mb-2">
                    Powering Rural Communities
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How our solar initiative brought electricity to a remote
                    village, transforming lives.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 px-4 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Renewable Revolution
          </h2>
          <p className="text-xl mb-8 dark:text-gray-800 text-gray-300">
            Be part of the solution. Together, we can create a cleaner, more
            sustainable world for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white border-2 border-green-500 text-black">
              <Link href="/get-involved#volunteer-form">Volunteer</Link>
            </Button>
            <Button asChild className="bg-white border-2 border-green-500 text-black">
              <Link href="/donations">Donate</Link>
            </Button>
            <Button asChild  className="bg-white border-2 border-green-500 text-black">
              <Link href="/subscription">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
