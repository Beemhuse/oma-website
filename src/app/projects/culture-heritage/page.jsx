import { Button } from "@/components/component/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BiBook, BiCamera, BiChevronRight, BiGlobe, BiMusic, BiPalette } from "react-icons/bi"
import { FaUtensils } from "react-icons/fa"

export default function CultureHeritageProject() {
  return (
    <div className="min-h-screen bg-cream-100">
      {/* Hero Section with Mosaic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-1 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-br dark:bg-none  from-amber-100 to-green-200 opacity-50"></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-900">
            Preserving Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600">
              Culture & Heritage
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 dark:text-white text-black">
            Celebrating diversity, honoring traditions, and bridging generations through cultural preservation.
          </p>
          <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
            <Link href="#initiatives" className="flex items-center">
              Explore Our Initiatives <BiChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Cultural Initiatives Carousel */}
      <section id="initiatives" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-900">Our Cultural Initiatives</h2>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory">
              {[
                { icon: BiGlobe, title: "Global Heritage Preservation", color: "bg-blue-100 text-blue-600" },
                { icon: BiBook, title: "Oral History Documentation", color: "bg-green-100 text-green-600" },
                { icon: BiCamera, title: "Cultural Photography", color: "bg-purple-100 text-purple-600" },
                { icon: BiMusic, title: "Traditional Music Revival", color: "bg-red-100 text-red-600" },
                { icon: BiPalette, title: "Indigenous Art Promotion", color: "bg-yellow-100 text-yellow-600" },
                { icon: FaUtensils, title: "Culinary Heritage", color: "bg-pink-100 text-pink-600" },
              ].map((item, index) => (
                <div key={index} className="flex-none w-80 snap-center">
                  <div
                    className={`${item.color} p-6 rounded-xl shadow-lg h-full flex flex-col items-center text-center`}
                  >
                    <item.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Preserving and promoting {item.title.toLowerCase()} for future generations.
                    </p>
                    <Button variant="outline" asChild className="mt-auto">
                      <Link href={`/initiatives/${item.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Tapestry */}
      {/* <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-900">Our Cultural Tapestry</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Culture+${i + 1}`}
                  alt={`Cultural image ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-white text-center font-semibold">Cultural Tradition {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Interactive Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-900">Journey Through Time</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            {[
              { year: 1950, title: "Cultural Renaissance", description: "Post-war revival of traditional arts" },
              {
                year: 1975,
                title: "Heritage Conservation Act",
                description: "Landmark legislation to protect cultural sites",
              },
              {
                year: 2000,
                title: "Digital Archive Launch",
                description: "Preserving oral histories and traditions online",
              },
              {
                year: 2025,
                title: "Global Cultural Exchange",
                description: "Fostering international appreciation of diverse heritages",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"} md:w-1/2`}
              >
                <div className="bg-amber-50 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-green-800">
                    {item.year}: {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute top-6 -mt-1.5 w-4 h-4 rounded-full bg-amber-500 shadow md:left-1/2 md:ml-1.5"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 dark:text-white  text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Voices of Our Heritage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Elena Rodriguez",
                role: "Cultural Historian",
                quote: "This project has been instrumental in preserving our community's rich oral traditions.",
              },
              {
                name: "Akira Tanaka",
                role: "Traditional Artisan",
                quote: "Thanks to the NGO's support, I've been able to pass on my craft to the next generation.",
              },
              {
                name: "Amara Okafor",
                role: "Youth Participant",
                quote: "Learning about my heritage has given me a stronger sense of identity and belonging.",
              },
              {
                name: "Liam O'Connor",
                role: "Local Museum Curator",
                quote: "The cultural initiatives have breathed new life into our exhibitions and community engagement.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-red-900 p-6 rounded-xl shadow-lg">
                <p className="mb-4 italic">&quot;{item.quote}&quot;</p>
                <div className="font-semibold">{item.name}</div>
                <div className="text-green-300">{item.role}</div>
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
      }}className="py-20 px-4  text-black">
        <div className="max-w-4xl dark:text-white mx-auto text-center">
          <h2 className="text-3xl font-bold dark:text-white mb-6">Be a Guardian of Culture</h2>
          <p className="text-xl mb-8">
            Join us in preserving and celebrating the rich tapestry of our shared cultural heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-100">
              <Link href="/get-involved/#volunteer-form">Volunteer</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className=" border-white hover:bg-white hover:text-green-600"
            >
              <Link href="/donations">Support Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

