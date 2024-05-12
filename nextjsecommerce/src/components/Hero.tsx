'use client'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/premium-photo/portrait-her-she-nice-attractive-cheerful-cheery-girl-carrying-new-clothing-things-spending-holiday-isolated-bright-vivid-shine-vibrant-green-blue-turquoise-color-wall_274222-15637.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=ais" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-navy">Start Your Shopping</h1>
      <p className="py-6">Discover your perfect fit with our curated collection of stylish essentials</p>
      <button className="btn bg-navy text-white hover:bg-blue hover:text-white">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
