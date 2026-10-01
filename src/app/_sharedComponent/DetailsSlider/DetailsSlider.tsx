"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import type {Swiper as SwiperInstance} from 'swiper'
export default function DetailsSlider({ imgList }: { imgList: string[] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

    return (
        <div className="flex flex-col gap-3 bg-white p-4 border border-gray-100 rounded-xl shadow-xs">
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Thumbs]}
                className="w-full h-95 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center"
            >
                {imgList?.map((src, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center">
                        <Image 
                            src={src} 
                            alt={`Product image ${i}`} 
                            width={400} 
                            height={400} 
                            className="w-full h-full object-contain p-2" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="w-full h-20 cursor-pointer"
            >
                {imgList?.map((src, i) => (
                    <SwiperSlide key={i} className="border border-gray-200 rounded-md overflow-hidden hover:border-green-500 transition-all bg-white flex items-center justify-center">
                        <Image 
                            src={src} 
                            alt={`Thumb ${i}`} 
                            width={100} 
                            height={100} 
                            className="w-full h-full object-contain p-1" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}