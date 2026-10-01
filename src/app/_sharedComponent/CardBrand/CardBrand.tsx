import { IBrand } from "@/interface/brand.interface";
import Image from "next/image";
import Link from "next/link";
export default function CardBrand({ brand }: { brand: IBrand }) {
  return (
  <section className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1 block">
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
        <Image 
          src={brand.image} 
          alt={brand.name} 
          width={300} 
          height={300} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
        {brand.name}
      </h3>

    </section>
  )
}
