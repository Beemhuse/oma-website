"use client";

import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Page() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is One Map Africa?",
      answer:
        "One Map Africa is an international non-governmental organization (NGO) committed to fostering unity and prosperity across Africa through dialogue, collaboration, and integration among African nations. Our vision is to create a continent where cooperation thrives, barriers dissolve, and shared prosperity is achieved.",
    },
    {
      question: "What are the core values of One Map Africa?",
      answer: "Our core values are respect, collaboration, and empowerment.",
    },
    {
      question: "What is the mission of One Map Africa?",
      answer:
        "Our mission is to bring people together to achieve sustainable development and peace.",
    },
    {
      question: "What are the primary objectives of One Map Africa?",
      answer: "To support unity, integration, and economic development in Africa.",
    },
    {
      question: "How can I get involved with One Map Africa?",
      answer:
        "You can get involved by volunteering, donating, or participating in our initiatives.",
    },
    {
      question: "What projects does One Map Africa focus on?",
      answer:
        "One Map Africa focuses on educational, environmental, and community development projects.",
    },
    {
      question: "How can I subscribe to the One Map Africa newsletter?",
      answer: "Visit our website and sign up for the newsletter on the homepage.",
    },
    {
      question: "How does One Map Africa mobilize resources?",
      answer:
        "We mobilize resources through partnerships, fundraising, and community support.",
    },
    {
      question: "Who can I contact for more information?",
      answer: "You can reach out to our team via the contact form on our website.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">FAQ</h2>
          <p className="text-gray-600">
            Find answers to frequently asked questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                open === index ? "bg-white" : "bg-gray-50"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div
                className="flex items-center gap-10 cursor-pointer"
              >
                <span
                  className={`transition-transform`}
                >
                  {
                    open === index?
                    <FaMinus className='text-2xl text-[#DB101C]'/>
                    :
                    <FaPlus className='text-xl' />
                  }
                </span>
                <h3
                  className={`font-semibold text-gray-800`}
                >
                  {faq.question}
                </h3>
              </div>
              {open === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
