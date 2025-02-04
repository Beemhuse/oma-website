"use client";
import useSlideIn from "@/hooks/useSlideIn";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { push } = useRouter();
  let slideinRef = useSlideIn();

  return (
    <footer ref={slideinRef} className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-10">
          <h3 className="xl:text-3xl text-xl font-normal w-full xl:w-[300px] m-auto">
            Erasing the lines that divide us
          </h3>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => push("/subscription")}
              className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-green-800 transition"
            >
              PARTNER WITH US
            </button>
            <button
              onClick={() => push("/donations")}
            className="px-6 py-2 bg-white text-green-800 rounded-md hover:bg-opacity-80 transition"
            >
              DONATE
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          <div>
            <h3 className="font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Project</li>
              <li>Get Involved</li>
              <li>News & Update</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">WHAT WE DO</h3>
            <ul className="space-y-2">
              <li>Encouraging Testing</li>
              <li>Strengthening Advocacy</li>
              <li>Sharing Information</li>
              <li>Building Leadership</li>
              <li>Engaging With Global Fund</li>
              <li>Shining a Light</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>General Info</li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                {" "}
                <Link href={"/terms"}> Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">TALK TO US</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:onemapafrica@gmail.com">
                  onemapafrica@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+233501052495">+233501052495</Link>
              </li>
             
            </ul>
          </div>

          <div className="">
          <h3 className="font-semibold mb-4">CONTACT US</h3>

            <ul>
              <li>
                {" "}
                <Link
                  href={"https://www.facebook.com/onemapofficial"}
                  target="_blank"
                >
                  Facebook{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.tiktok.com/@one_map_africa"}
                  target="_blank"
                >
                  Tiktok
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.linkedin.com/company/one-map-africa/"}
                  target="_blank"
                >
                  LinkedIn
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"https://x.com/_onemapofficial"} target="_blank">
                  {" "}
                  Twitter
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"https://www.youtube.com/@onemapofficial"} target="_blank">
                  {" "}
                  Youtube
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col px-8 lg:flex-row justify-between items-center border-t border-white pt-6">
          <div className="flex items-center space-x-3">
            <Image
              width={200}
              height={200}
              src="/one_map.svg"
              alt="One Map Africa Logo"
              className="w-24 h-auto object-contain"
            />
            <span className="text-sm">
              © {new Date().getFullYear()} One Map Africa. All Rights Reserved.
            </span>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link
              href={"https://www.facebook.com/onemapofficial"}
              target="_blank"
            >
              <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/one-map-africa/"}
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            </Link>
            <Link href={"https://x.com/_onemapofficial"} target="_blank">
              <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            </Link>
            <Link href={"https://www.youtube.com/@onemapofficial"} target="_blank">
              <FaYoutube className="hover:text-gray-300 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
