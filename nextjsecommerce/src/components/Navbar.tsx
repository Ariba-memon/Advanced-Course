'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '../Assets/Logo.png'
import { ShoppingCart } from 'lucide-react'
import { SignInButton, UserButton, useAuth } from '@clerk/nextjs'
import Link from 'next/link'
const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="navbar bg-navy text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'} /> Home </li>
        <li>
          <Link href={'/'} />
          <ul className="p-2 bg-navy text-white">
            <li><a className='bg-navy text-white '>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Shopping Website</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <Link href='/Aboutus'>About Us </Link></li>
      <li>
        <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li className='bg-navy text-white '><a>Male</a></li>
            <li className='bg-navy text-white '><a>Female</a></li>
          </ul>
        </details>
      </li>
      <li><a>More</a></li>
    </ul>
  </div>
  
  <div className="navbar-end">
  <Link href='/'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart m-4"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></Link>
     {!isSignedIn && (
                  <SignInButton mode="modal">
                    <button>
                      Signin

                    </button>

                  </SignInButton>
                )}

                <UserButton afterSignOutUrl="/" />
  </div>
</div>
  )
}

export default Navbar
