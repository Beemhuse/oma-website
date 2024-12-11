// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
import MainLayout from "./MainLayout";

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
      <body className="antialiased font-poppins">
        <MainLayout>
          <Header />
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
