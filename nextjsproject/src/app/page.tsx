"use client"
import Image from "next/image";
import { CldUploadButton,CldImage } from 'next-cloudinary';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CldUploadButton uploadPreset="ypcarjvg" />
     <CldImage
     src="cld-sample-5"
     alt="Description of my image"
     width='400'
     height='400'
     />
    </main>
  );
}
