"use client"
import Image from "next/image";
import { CldUploadButton,CldImage } from 'next-cloudinary';
import { useState } from "react";
import WhatsApp from "@/components/WhatsApp";
import Sidebar from "@/components/Sidebar";


interface UploadImage{
 event: "success";
 info:{public_id: string}
}

export default function Home() { 
 
  //use state for images
  const [imageId, setImageId] = useState("cld-sample-5")
  return (
    <div>
    <Sidebar />
   
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
     <CldUploadButton uploadPreset="ypcarjvg"
    //  onUpload ={(result,widget) =>{
    //   // console.log('result',result)
    //   // console.log('widget',widget)
    //  }}

    onUpload={(result) =>{
      let res = result as UploadImage
      setImageId(res.info.public_id)
    }}
     
     />
     <CldImage
     src={imageId}
     alt="Description of my image"
     width='400'
     height='400'
     />
       {/* <WhatsApp /> */}
    </main>
    </div>
  );
}
