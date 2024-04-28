"use client"
import { CldUploadButton,CldImage } from "next-cloudinary";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="eonwgrwb" />
      <CldImage
  width="400"
  height="400"
  src='cld-sample-4'
  sizes="100vw"
  alt="Description of my image"
/>


    </main>
  );
}
