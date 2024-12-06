import React from "react";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

interface Data {
  imgSource: string;
  productDescription?: string; // Marked as optional
  btnText: string;
  imgWidth: number;
  imgHeight: number;
  containerWidth: string
}

const ShopCards = ({
  imgSource,
  productDescription,
  btnText,
  imgWidth,
  imgHeight,
  containerWidth,
}: Data) => {
  return (
    <div className={`w-[${containerWidth}%]`}>
      <div className="relative">
        <Image
          width={imgWidth}
          height={imgHeight}
          alt="Some Image"
          src={imgSource}
        />
        <div className="absolute w-full h-full top-0 left-0 flex justify-start items-end">
          <button className="bg-cream flex duration-200 py-3 pl-2 pr-3 gap-4 text-xl items-center hover:opacity-65">
            {btnText} <CircleArrowRight size={23} strokeWidth={1} />
          </button>
        </div>
      </div>
      {productDescription && <p className="text-xs my-3">{productDescription}</p>} {/* Conditionally render */}
    </div>
  );
};

export default ShopCards;
