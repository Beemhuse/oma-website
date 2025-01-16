import "./globals.css";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
import MainLayout from "./MainLayout";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

// Import the Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "One Map Africa",
  description: "One Map Africa is a dedicated NGO leveraging innovative mapping and GIS solutions to address pressing challenges across Africa. We empower communities, support sustainable development, and drive impactful decision-making through real-time data and geographic insights. Join us in creating a brighter future for the continent.",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased max-w-[1440px] m-auto overflow-x-hidden font-poppins">
        <MainLayout>
        <Header />
        <div className="relative mt-20">

          {children}
        <BackToTopButton />
        </div>
        <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
