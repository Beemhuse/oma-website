import React from 'react'

export default function Page() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="m-full mx-auto flex gap-5 ">
        {/* Contact Information */}
        <div className='w-1/3 flex flex-col items-center'>
          <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-10">
              <div className="flex flex-col gap-2 items-start">
                <span className="w-3 h-3 bg-red-600 rounded-full mt-1 mr-4"></span>
                <p className='w-[2px] h-[100px] bg-[#DDDBDA] translate-x-[5px]'></p>
              </div>
              <div className='flex flex-col gap-8 items-left'>
                <h3 className="text-2xl font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Ghana, Gambia & Uganda</p>
              </div>
            </li>
            <li className="flex items-start gap-10">
              <div className="flex flex-col gap-2 items-start">
                <span className="w-3 h-3 bg-red-600 rounded-full mt-1 mr-4"></span>
                <p className='w-[2px] h-[100px] bg-[#DDDBDA] translate-x-[5px]'></p>
              </div>
              <div className='flex flex-col gap-8 items-left'>
                <h3 className="text-2xl font-semibold text-gray-800">Phone Number</h3>
                <p className="text-gray-600">+233 2410-5252-6</p>
              </div>
            </li>
            <li className="flex items-start gap-10">
              <div className="flex flex-col gap-2 items-start">
                <span className="w-3 h-3 bg-red-600 rounded-full mt-1 mr-4"></span>
                {/* <p className='w-[2px] h-[100px] bg-[#DDDBDA] translate-x-[5px]'></p> */}
              </div>
              <div className='flex flex-col gap-8 items-left'>
                <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">onemapafrica@gmail.com</p>
              </div>
            </li>
          </ul>
          </div>
        </div>  

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-[32px] shadow-lg w-2/3">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="NG +234"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter Message Subject"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your Message here"
                rows="4"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-fit py-3 px-6 bg-red-600 text-white font-medium text-sm rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 text-right">
            <a href="#" className="text-gray-700 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};



