import PrimaryBtn from '@/app/Components/ui/Button'
import Image from 'next/image'
import { PlayFair } from "@/app/fonts";

const HeroSection = () => {
  return (
    <div className='hero-section w-full h-full flex justify-center items-center'>
      <div className="w-[92%]">
        <div className="hero-top my-8 max-md:flex-col max-md:items-start flex justify-between items-center">
          <h1 className={`text-[8rem] max-lg:text-[4rem] max-xs:!text-[2rem] font-medium ${PlayFair.className}`}>
            Holiday Sale
          </h1>
          <div className='mt-24 max-md:mt-4'>
            <h3 className='text-lg font-normal mb-6 max-xs:text-sm'>
              Tis’ the Season for Savings! <br /> Up to 40% Off Everything*.
            </h3>
            <PrimaryBtn name='Shop Sale' />
          </div>
        </div>
        <div className="hero-bottom flex max-xs:flex-col mt-16">
          {/* First Image */}
          <div className="relative w-[50%] max-xs:w-[100%] group">
            <Image
              alt="hero1"
              src="/Images/hero-1.png"
              className="object-cover"
              width={800} // Specify the desired width
              height={600} // Specify the desired height
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>
          {/* Second Image */}
          <div className="relative max-xs:w-[100%] w-[50%] group">
            <Image
              alt="hero2"
              src="/Images/hero-2.png"
              className="object-cover"
              width={800} // Specify the desired width
              height={600} // Specify the desired height
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
