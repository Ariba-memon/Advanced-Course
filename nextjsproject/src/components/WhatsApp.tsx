import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import WhatsAppicon from '../../public/WhatsApp_icon.png.webp'
const WhatsApp = () => {
  return (
    <div>
      
  <Link href='https://wa.me/+92888888999' target="blank" >
 <Image className="relative m-96 " alt="whatsapp" width={60} height={60} src={WhatsAppicon} /></Link>

    </div>
  )
}

export default WhatsApp
