import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import React from "react";
export const metadata = {
  title: "Privacy policy | One Map Africa",
  description: "At One Map Africa, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when you use our website or engage with our organization."
}
export default function Page() {
  return (
    <div>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8  text-white"
        style={{
          backgroundImage: "url(/bg-layout.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center xl:text-4xl text-xl">Privacy Policy</h1>
      </section>
      <PrivacyPolicy />
    </div>
  );
}
