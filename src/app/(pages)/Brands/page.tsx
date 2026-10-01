import CardBrand from "@/app/_sharedComponent/CardBrand/CardBrand"
import { IBrand } from "@/interface/brand.interface"
import { BrandResponse } from "@/interface/response.type"
import { getBrands } from "@/services/Brand.service"
import Link from "next/link"
import { FaTags } from "react-icons/fa6";
export default async function Brands() {

  let brands: BrandResponse = await getBrands()
  return (
    <main className=" w-full min-h-screen pb-16 mt-10 md:mt-25">

      <div className="w-full bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white shadow-md mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <Link className="hover:text-white transition-colors" href="/">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Brands</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 text-white text-3xl">
              <FaTags />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Top Brands</h1>
              <p className="text-white/80 mt-1">Shop from your favorite brands</p>
            </div>
          </div>
        </div>
      </div>
      <section className="container  max-w-7xl mx-auto my-14 px-4 sm:px-6 lg:px-8 w-ful">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
          {brands?.data.map((brand: IBrand) => {
            return <CardBrand key={brand._id} brand={brand} />
          })}
        </div>

      </section>

    </main>
  )
}
