import Link from "next/link";
import { BiCalendar, BiHeart } from "react-icons/bi";

export default function WomensDayHeader() {
  return (
    <header className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/women.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-green-800/90 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 mx-auto py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center justify-center px-4 py-2 rounded-full backdrop-blur-md border border-white/20 bg-white/10"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <BiHeart className="h-5 w-5 text-pink-300 mr-2" fill="currentColor" />
            <span className="text-sm font-medium text-white">
              International Women&apos;s Day
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Celebrating{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              Women&apos;s
            </span>{" "}
            Achievements
          </h1>

          <p className="max-w-[700px] text-white/90 text-lg md:text-xl leading-relaxed">
            Join us in honoring the social, economic, cultural, and political
            achievements of women around the world.
          </p>

          <div className="flex items-center text-sm text-white/80 mt-2 backdrop-blur-sm bg-white/5 px-3 py-1.5 rounded-full">
            <BiCalendar className="h-4 w-4 mr-2" />
            <span>March 22, {new Date().getFullYear()}</span>
          </div>

          <div className="flex sm:flex-row gap-4 mt-8">
            <Link href={"https://us06web.zoom.us/j/84514074867?pwd=8sYal1clDNLZq4Yveoo6ZhDZYtyPmv.1"} target="_blank" className="bg-white text-purple-800 hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium transition-all hover:shadow-lg">
              Register for Event
            </Link>
           
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent z-0" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl" />
    </header>
  );
}
