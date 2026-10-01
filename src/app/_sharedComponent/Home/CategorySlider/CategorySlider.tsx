import { ICategory } from "@/interface/category.interface"
import { categoryResponse } from "@/interface/response.type"
import { getCategories } from "@/services/category.service"
import MainSlider from "../MainSlider/MainSlider"
import SectionTitle from "@/app/_sharedComponent/SectionTitle/SectionTitle"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default async function CategorySlider() {
  const data: categoryResponse = await getCategories()

  const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
  };

  const imgList = data?.data.map((cat: ICategory) => {
    return {
      path: cat.image,
      name: cat.name,
      id: cat._id
    }
  })

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="w-full sm:w-auto">
          <SectionTitle title={'Category'} subtitle={'Shop By'} />
        </div>

        <Link
          href={'/Categories'}
          className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base flex items-center gap-2 transition-colors self-start sm:self-auto"
        >
          View All Categories
          <FaArrowRight className="text-xs mt-0.5" />
        </Link>
      </header>

      <MainSlider images={imgList} options={swiperOptions} />
    </div>
  )
}