"use client";
import { PlayFair, MontserratFont } from "@/app/fonts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface propType {
  count: number;
  name: string;
  fontSize: string; // Should be a string (e.g., "20px", "2rem")
  fontFamily: boolean;
}

const MovingLine = ({ count, name, fontSize, fontFamily }: propType) => {
  useEffect(() => {
    gsap.fromTo(
      ".moving-line-container",
      { x: "0%" },
      {
        x: "-100%",
        duration: 20,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  const fontClass = fontFamily ? MontserratFont.className : PlayFair.className;

  const elements = Array.from({ length: count }, (_, i) => (
    <div key={i} className="flex items-center">
      <h1
        className={`${fontClass} font-normal text-black`}
        style={{ fontSize }}
      >
        {name}
      </h1>
      <div className="w-28 h-1 bg-black mx-5"></div>  
    </div>
  ));

  return (
    <div className="w-full overflow-hidden">
      <div
        className="moving-line-container flex whitespace-nowrap"
        style={{ width: `${count * 200}px` }} // Dynamically set container width
      >
        {elements}
      </div>
    </div>
  );
};

export default MovingLine;
