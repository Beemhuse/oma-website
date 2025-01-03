'use client'
import Image from 'next/image';
import donate from '../../../public/landingPage/donate.jpg'
import useSlideInAnimation from '@/hooks/slideAnimation';
import { useRouter } from 'next/navigation';
const Donation = () => {
  const leftRef = useSlideInAnimation('left', 1000);
  const rightRef = useSlideInAnimation('right', 1000, 200);
const {push} = useRouter()
    return (
      <div className="bg-white text-black py-16 px-8 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col justify-between lg:flex-row items-center">
          {/* Text Content */}
          <div ref={leftRef} className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-red-500 text-sm font-semibold flex gap-2 mb-2 justify-left items-center transform -translate-x-[54px]">
                <p className='bg-black w-[50px]  h-[2px]'></p> Donate
            </div>
            {/* <h3 className="uppercase text-sm font-semibold text-gray-400 mb-2">Donate</h3> */}
            <h1 className="text-4xl font-bold mb-6">
              Making a donation for <br />
              African.
            </h1>
            <p className="text-black/70 mb-6">
              When you donate, you&apos;re supporting effective care to children with
              special needs—an investment in the leaders of tomorrow.
            </p>
            <button onClick={()=> push("/donations")} className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
              Donate
            </button>
          </div>
  
          {/* Image Content */}
          <div ref={rightRef} className="lg:w-1/3">
            <Image
              src={donate}
              alt="Donation Box"
              className="  w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Donation;
  