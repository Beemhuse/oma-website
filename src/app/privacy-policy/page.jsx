import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import React from "react";

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
