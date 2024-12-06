"use client"

import { MontserratFont } from "./fonts";
import Head from '@/app/Components/Header'
import Nav from '@/app/Components/Navbar'
import HeroSection from "./Components/HeroSection";
import MovingLine from "./Components/ui/MovingLine";
import FeaturedProducts from "./Components/FeaturedProducts";

export default function Home() {
  return (
    <div className={MontserratFont.className}>
      <Head />
      <Nav />
      <HeroSection />
      <MovingLine count={30} name="Explore" fontSize="8rem" fontFamily={false} />
      <FeaturedProducts/>
    </div>
  );
}
