import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' flex-col md:flex bg-gray-800 text-white '>
      <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
            <h1 className='text-3xl font-bold tracking-tight'>Bootcamp Gallery Website</h1>
          
            <div className='ml-auto flex items-center space-x-4'>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<Link href='https://calendly.com/aribamemon' target='blank'>Book a Meeting</Link>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
