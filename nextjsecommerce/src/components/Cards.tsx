import React from 'react'
import Image from 'next/image'
import MoyeMoyeTshirt from '../Assets/black_f.jpg'
const Cards = () => {
  return (
    <>
    <div className='grid grid-cols-3'>
    <div className="card w-96 bg-base-100 shadow-xl m-10">
  <figure><Image width={200}  height={200}src={MoyeMoyeTshirt} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Moye Moye Meme T-Shirt
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Moye Moye Meme  Famous T-Shirt <b>70% off</b> </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Male</div>
    </div>
  </div>
  <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><Image width={200}  height={200}src={MoyeMoyeTshirt} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Moye Moye Meme T-Shirt
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Moye Moye Meme  Famous T-Shirt <b>70% off</b> </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Male</div>
    </div>
  </div>
  
</div>
</div>

    </div>
    </>
  )
}

export default Cards
