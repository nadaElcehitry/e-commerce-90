
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getCatDetails } from "@/services/categoryDetails.service";
import { FaFolderOpen } from "react-icons/fa6";
import Image from "next/image";
export default async function CategoriesDetails({ params}: { params: Promise<{ id: string }>;}) {

  const { id } = await params;

  const { data } = await getCatDetails(id);

  return (

    <section className="min-h-screen bg-gray-50/50">


      <div className="mt-10 md:mt-25 bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">

        <div className="container mx-auto px-4 py-12 sm:py-16 max-w-7xl">


          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">

            <Link

              className="hover:text-white transition-colors"

              href="/"

            >

              Home

            </Link>

            <span className="text-white/40">/</span>

            <Link

              className="hover:text-white transition-colors"

              href="/categories"

            >

              Categories

            </Link>

            <span className="text-white/40">/</span>

            <span className="text-white font-medium">

              {data?.name}

            </span>

          </nav>


          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden relative">

              {data?.image && (

                <Image
width={200}
height={180}
                  src={data.image}

                  alt={data.name}

                  className="w-12 h-12 object-contain"

                />

              )}

            </div>

            <div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">

                {data?.name}

              </h1>

              <p className="text-white/80 mt-1">

                Explore all products in this category

              </p>

            </div>

          </div>

        </div>

      </div>


      <div className="container mx-auto px-4 py-10 max-w-7xl">


        <Link

          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-10 font-medium"

          href="/categories"

        >

          <FaArrowLeft />

          <span>Back to Categories</span>

        </Link>


        <div className="flex justify-center">

<div className="text-center py-20  rounded-2xl shadow-xs p-8 max-w-xl mx-auto my-6">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5 text-green-500 text-3xl">
                 <FaFolderOpen />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Subcategories Found</h3>
              <p className="text-gray-500 mb-6 text-sm sm:text-base">This category doesn't have any subcategories yet.</p>
             <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-sm"
            href={`/Products?Category=${data?.name}`}
              >
                View All Products in {data?.name}
              </Link>
            </div>
      

        </div>

      </div>

    </section>

  );

}