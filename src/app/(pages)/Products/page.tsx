
import { getProducts } from "@/services/product.services";

import { productResponse } from "@/interface/response.type";

import { IProduct } from "@/interface/product.interface";

import Card from "@/app/_sharedComponent/Card/Card";

import { FaBox } from "react-icons/fa";

import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa6";

export default async function Products({ searchParams }: { searchParams: Promise<{ Category?: string }>; }) {

  const { Category } = await searchParams;

  const products: productResponse = await getProducts();

  const filteredProducts = Category

    ? products.data.filter(

      (product: IProduct) => product.category.name === Category

    )

    : products.data;

  return (

    <section className="w-full min-h-screen pb-16 mt-10 md:mt-25">


      <div className="w-full bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white shadow-md mb-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">


          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">

            <Link

              className="hover:text-white transition-colors"

              href="/"

            >

              Home

            </Link>

            <span className="text-white/40">/</span>

            <span className="text-white font-medium">

              {Category || "All Products"}

            </span>

          </nav>


          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 text-white text-3xl">

              <FaBox />

            </div>

            <div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">

                {Category || "All Products"}

              </h1>

              <p className="text-white/80 mt-1">

                {Category

                  ? `Explore ${Category} products`

                  : "Explore our complete product collection"}

              </p>

            </div>

          </div>

        </div>

      </div>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">

            {filteredProducts.map((product: IProduct) => (

              <Card

                key={product._id}

                product={product}

              />

            ))}

          </div>

        ) : (


          <div className="text-center py-20  rounded-2xl shadow-xs  p-8 max-w-xl mx-auto my-6">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5 text-green-500 text-3xl">
              <FaFolderOpen />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">No products match your current filters.</p>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-sm"
              href={`/Products`}
            >
              View All Products
            </Link>
          </div>



        )}

      </section>

    </section>

  );

}