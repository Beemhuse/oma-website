import React from 'react';
import gal1 from "../../../public/landingPage/gal1.png";
import gal2 from "../../../public/landingPage/gal2.png";
import gal3 from "../../../public/landingPage/gal3.png";
import gal4 from "../../../public/landingPage/gal4.png";
import gal5 from "../../../public/landingPage/gal5.png";
import gal6 from "../../../public/landingPage/gal6.png";
import gal7 from "../../../public/landingPage/gal7.png";
import gal8 from "../../../public/landingPage/gal8.png";
import Image from 'next/image';

export default function Page() {
  const images = [gal1, gal2, gal3, gal4, gal5,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6,gal3, gal4, gal5, gal6, gal6, gal7, gal8];

  return (
    <div className="bg-white p-8">
      {/* Header Section */}
      {/* <div className="mb-6">
       
      </div> */}

      {/* Gallery Section */}
      <div className="grid h-screen grid-cols-13 gap-2 md:gap-4">

        <div className='border-2 border-green-200 col-span-12 '>testing 1</div>
        <div className='border-2 border-green-200 col-span-6 row-span-2'>testing 2</div>
        <div className='border-2 border-green-200 col-span-3 col-start-8'>testing 3</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        <div className='border-2 border-green-200'>testing</div>
        

      </div>

      {/* Load More Button */}
      <div className="text-center mt-6">
        <button className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700">
          Load more...
        </button>
      </div>
    </div>
  );
}
