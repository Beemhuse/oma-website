"use client";
import { useEffect, useMemo, useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("info");

  const sections = useMemo(
    () => [
      { id: "info", title: "Information We Collect" },
      { id: "use", title: "How We Use Your Information" },
      { id: "security", title: "Data Security" },
      { id: "thirdParty", title: "Third-Party Disclosure" },
      { id: "rights", title: "Your Rights" },
      { id: "changes", title: "Changes to This Policy" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // Adjusted for offset
      sections.forEach((section) => {
        const sectionEl = document.getElementById(section.id);
        if (
          sectionEl.offsetTop <= scrollPos &&
          sectionEl.offsetTop + sectionEl.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row p-8 gap-8">
      {/* Left Side: Privacy Policy Content */}
      <div className="flex-1 max-w-4xl">
      
        <p className="text-gray-600 mb-10">
          At One Map Africa, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard the information you
          provide when you use our website or engage with our organization.
        </p>

        {/* Section 1 */}
        <section id="info" className="mb-10">
          <h2 className="text-xl font-semibold text-[#FFC90C] mb-2">
            Information We Collect
          </h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              <strong>Personal Information:</strong> When you visit our website
              or interact with us, we may collect personal information such as
              your name, email address, phone number, and any other information
              you voluntarily provide.
            </li>
            <li>
              <strong>Usage Information:</strong> We may also collect
              non-personal information about your interactions with our website,
              such as your IP address, browser type, pages visited, and other
              usage data.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="use" className="mb-10">
          <h2 className="text-xl font-semibold text-[#36B37E] mb-2">
            How We Use Your Information
          </h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              <strong>To Provide Services:</strong> We use the information we
              collect to deliver the services you request.
            </li>
            <li>
              <strong>To Improve Our Website:</strong> We use aggregated data to
              analyze trends.
            </li>
            <li>
              <strong>To Communicate With You:</strong> We may send you
              newsletters and updates. You can opt-out at any time.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="security" className="mb-10">
          <h2 className="text-xl font-semibold text-[#36B37E] mb-2">
            Data Security
          </h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal
            information from unauthorized access.
          </p>
        </section>

        {/* Section 4 */}
        <section id="thirdParty" className="mb-10">
          <h2 className="text-xl font-semibold text-[#36B37E] mb-2">
            Third-Party Disclosure
          </h2>
          <p className="text-gray-600">
            We do not sell or transfer your personal information to outside
            parties unless required.
          </p>
        </section>

        {/* Section 5 */}
        <section id="rights" className="mb-8">
          <h2 className="text-xl font-semibold text-[#36B37E] mb-2">
            Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal
            information anytime.
          </p>
        </section>

        {/* Section 6 */}
        <section id="changes" className="mb-8">
          <h2 className="text-xl font-semibold text-[#36B37E] mb-2">
            Changes to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time.
          </p>
        </section>
      </div>

      {/* Right Side: Table of Contents */}
      <div className="w-full lg:w-1/4 ">
        <div className="p-8 border rounded-md shadow-sm bg-gray-50 sticky top-20">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ul className="flex flex-col gap-5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block text-sm font-medium ${
                    activeSection === section.id
                      ? "text-[#36B37E] "
                      : "text-gray-600 hover:text-[#36B37E]"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
