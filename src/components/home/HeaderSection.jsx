import React from 'react'
import pics from "../../../public/landingPage/ngo.jpg"
import africa from "../../../public/landingPage/africa.png"
import Image from 'next/image'

const HeaderSection = () => {
  return (
    <section className="h-full md:h-screen  grid grid-cols-1 md:grid-cols-2 md:gap-10 px-2">
        <div className="container mx-auto text-center  md:px-28 relative">
          <Image src={africa} className='w-fl h-ful object-contain absolute -top-16'/>
          <div className='h-full w-full md:w-4/5 text-left flex flex-col items-center md:items-start justify-center gap-10 static md:absolute'>
            <h1 className="text-4xl md:text-6xl text-center md:text-left    text-[#161413] font-semibold ">Erasing the Lines that Divide us</h1>
            <p className="text-lg text-center md:text-left mb-6 md:pr-16">
                One Map Africa is a non-governmental organization (NGO) dedicated to uniting Africa through fostering dialogue, collaboration, and integration among nations.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">Learn More</button>
                <button className="border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white">Get Involved</button>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <Image src={pics} alt='pics' className='w-full md:w-[80%] h-[80%] md:h-[65%]  object-cover rounded-xl'/>
        </div>
    </section>
  )
}

export default HeaderSection