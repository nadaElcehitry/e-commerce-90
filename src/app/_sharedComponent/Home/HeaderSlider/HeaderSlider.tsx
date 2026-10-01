"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import NextSlideBtn from '../nextSlideBtn/NextSlideBtn';
import PrevSliderBtn from '../prevSliderBtn/PrevSliderBtn';
import Link from 'next/link';
import Additional from '../../Additional/Additional';

export default function HeaderSlider() {
  const swiperOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    modules: [Autoplay, Pagination],
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className="mySwiper w-full"
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-100 overflow-hidden mt-8 lg:mt-20">
            <img 
              src="/assests/home-slider-1.d79601a8.png" 
              alt="slider" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className='absolute bg-linear-to-r from-green-500/90 to-green-400/50 inset-0 z-10'>
              <div className="mx-auto max-w-7xl  w-full h-full px-4 sm:px-6 lg:px-8 relative flex items-center z-25">
                <div className='text-white text-xl'>
                  <h1 className='text-white text-3xl font-bold mb-4 max-w-96'> Fresh products delivered to your Door </h1>
                  <p> Get 20% off your first order</p>
                  <div className="mt-5" >
                    <Link className="btn bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform" href={'/Products'}>Shop Now</Link>
                    <Link className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform " href={'/'}>View Deals</Link>
                  </div>
                </div>
              </div>
            </div>

            <NextSlideBtn />
            <PrevSliderBtn />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-100 overflow-hidden mt-8 lg:mt-20">
            <img 
              src="/assests/home-slider-1.d79601a8.png" 
              alt="slider" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className='absolute bg-linear-to-r from-green-500/90 to-green-400/50 inset-0 z-10'>
              <div className="mx-auto max-w-7xl w-full h-full px-4 sm:px-6 lg:px-8 relative flex items-center z-25">
                <div className='text-white text-xl'>
                  <h1 className='text-white text-3xl font-bold mb-4 max-w-96'> Premium Quality Guaranteed </h1>
                  <p> Fresh from farm to your table</p>
                  <div className="mt-5" >
                    <Link className="btn bg-white border-2 border-white/50 text-blue-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform " href={'/Products'}>Shop Now</Link>
                    <Link className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform" href={'/'}>Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
            <NextSlideBtn />
            <PrevSliderBtn />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-100 overflow-hidden mt-8 lg:mt-20">
            <img 
              src="/assests/home-slider-1.d79601a8.png" 
              alt="slider" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className='absolute bg-linear-to-r from-green-500/90 to-green-400/50 inset-0 z-10'>
              <div className="mx-auto max-w-7xl w-full h-full px-4 sm:px-6 lg:px-8 relative flex items-center z-25">
                <div className='text-white text-xl'>
                  <h1 className='text-3xl font-bold mb-4 max-w-96'> Fast & Free Delivery </h1>
                  <p> Same day delivery available</p>
                  <div className="mt-5" >
                    <Link className="btn bg-white border-2 border-white/50 text-purple-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform" href={'/Products'}>Order Now</Link>
                    <Link className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform" href={'/'}>Delivery Info</Link>
                  </div>
                </div>
              </div>
            </div>
            <NextSlideBtn />
            <PrevSliderBtn />
          </div>
        </SwiperSlide>
      </Swiper>
      <Additional/>
    </>
  );
}