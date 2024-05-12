"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import ImageNew from '../Assets/imagenew.jpg'
import { FaStar } from "react-icons/fa6";

export default function App() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  return (
    <>
     <h1 className='text-center font-bold text-5xl m-4 text-navy'>Our Famous Products</h1>
      <Swiper
      
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <div className="-mb-8 sm:mb-[135px] sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
             T-shirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
             New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
            T-shirt
            </p>
            <div className="flex items-center gap-5 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
            T-shirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
            New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
            T-shirt
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">T-shirt</p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
            New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
            T-shirt
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
            T-shirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
            New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
            T-shirt
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
          T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
            New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
          T-SHirt
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
             T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
            New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
             T-SHirt
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
            T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
            New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
             T-SHirt
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <div>
              <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              T-SHirt
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              New T-SHirt
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              T-SHirt
              </p>
              <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
                <p>October 19, 2022</p>
                <div className="flex gap-2">
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
           T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
            New T-SHirt
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
            T-SHirt
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={ImageNew} alt="blog" />
            <div>
              <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              T-SHirt
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              New T-SHirt
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
             T-SHirt
              </p>
              <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
                <p>October 19, 2022</p>
                <div className="flex gap-2">
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}