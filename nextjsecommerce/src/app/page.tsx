'use client'
import Cards from "@/components/Cards";
import Facebook from "@/components/Facebook";
import Hero from "@/components/Hero";
 import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
<div >
  
  <Hero />
  <Facebook />
  <Cards/>
  <Slider />
</div>
  );
}
