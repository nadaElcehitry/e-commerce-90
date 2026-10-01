import { useSwiper } from 'swiper/react';
import { GrPrevious } from "react-icons/gr";

export default function PrevSliderBtn() {
  const swiper = useSwiper();

  return (
    <>
      <div onClick={() => swiper.slidePrev()} className='absolute z-50 bg-white/80 size-8 rounded-full flex items-center justify-center left-0 top-50  -translate-y-[50%] ml-4'>
        <GrPrevious className='text-green-600 ' />

      </div>

    </>
  )
}
