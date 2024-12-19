import "./globals.css";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
// import MainLayout from "./MainLayout";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// Import the Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "One Map Africa",
  description: "One Map Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased overflow-x-hidden font-poppins">
        {/* <MainLayout> */}
        <Toaster />
        <Header />
        {children}
        <Footer />
        {/* </MainLayout> */}
      </body>
    </html>
  );
}
