"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Iimages } from '@/interface/category.interface';
import Link from 'next/link';

export default function MainSlider({ images, options }: { images: Iimages[], options: any }) {
    const swiperOptions = {
        loop: true,
        modules: [Autoplay],
    };

    return (
        <div className="w-full">
            <Swiper {...swiperOptions} {...options} autoplay={{ delay: 3000 }}>
                {images?.map((slide: Iimages, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="group cursor-pointer">
                        <Link href={`/Categories/${slide.id}`} >

                                <div className="relative overflow-hidden rounded-xl shadow-sm mb-3">
                                    <Image
                                        src={slide.path}
                                        width={1290}
                                        height={180}
                                        alt={slide.name || "Category image"}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 bg-gray-100"
                                    />
                                </div>
                                </Link>
                                <h4 className="text-center font-semibold text-gray-800 text-base tracking-wide group-hover:text-green-600 transition-colors">
                                    {slide.name}
                                </h4>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}