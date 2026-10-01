import { useSwiper } from 'swiper/react';
import { GrNext } from "react-icons/gr";

export default function NextSlideBtn() {
      const swiper = useSwiper();

  return (
    <>
        
   <div onClick={() => swiper.slideNext()} className='absolute z-50 bg-white/60 size-8 rounded-full flex items-center justify-center right-0 top-50  -translate-y-[50%]  mr-10'>
              <GrNext className='text-green-600 ' />
            </div>
    </>
  )
}
