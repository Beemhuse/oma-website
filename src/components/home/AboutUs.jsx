import React from 'react'

const AboutUs = () => {
    return (
        <div className="bg-white text-black py-16 px-8 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Section */}
            <div>
              <div className='flex gap-8 mb-2 items-center'>
                <h3 className="text-[#1D2130] font-bold uppercase text-lg tracking-wide mb-2">
                    Introduction
                </h3>
                <p className='w-24 h-1 rounded-full bg-black'></p>
              </div>
              <h1 className="text-4xl text-[#1D2130] font-bold mb-6">Know about Us</h1>
              <p className="text-[#525560] mb-8 leading-relaxed">
                One Map Africa is an international non-governmental organization
                (NGO) committed to fostering the unity and prosperity of Africa. Our
                mission is to promote dialogue, collaboration, and integration among
                African nations to create a continent that stands united in pursuit
                of common goals. By empowering individuals and communities, we strive
                to dissolve barriers and enhance the well-being of all Africans.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition-all">
                Donate Now
              </button>
            </div>
    
            {/* Right Section */}
            <div>
              <div className='flex gap-8 mb-2 items-center'>
                <h3 className="text-[#1D2130] font-bold uppercase text-lg tracking-wide mb-2">
                    Our Story
                </h3>
                <p className='w-24 h-1 rounded-full bg-black'></p>
              </div>
              <p className="text-[#525560] leading-relaxed">
                Our journey began with a vision shared by seven individuals from
                diverse parts of Africa, including South Sudan, Ghana, Nigeria,
                Zambia, Uganda, and South Africa. These pioneers founded the
                organization under the name Africa's Eye Alliance, with the slogan
                "Erasing the Lines that Divide Us." Formally incorporated in Ghana
                in 2022, the organization was renamed One Map Africa to reflect our
                enduring commitment to unity and integration. Inspired by our past
                slogan, we have developed strategic plans to ensure our
                sustainability and independence by implementing meaningful projects
                and fostering a robust African economy with lasting positive social
                impact. We believe that African unity must be supported by
                self-sustenance systems to be truly meaningful.
              </p>
            </div>
          </div>
        </div>
      );
    };

export default AboutUs