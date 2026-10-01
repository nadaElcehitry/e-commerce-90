
import Link from 'next/link';
import {  FaHome, FaShoppingCart } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen mt-8 md:mt-25 bg-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      
      <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center">
        
        <div className="flex justify-center mb-10 relative">
          <div className="absolute inset-0 w-64 h-52 sm:w-72 sm:h-60 bg-emerald-100/50 rounded-4xl blur-2xl"></div>
          
          <div className="relative w-64 h-52 sm:w-72 sm:h-60">
            <div className="absolute inset-x-0 top-4 mx-auto w-52 h-40 sm:w-60 sm:h-44 bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-50/80 via-transparent to-emerald-100/40"></div>
              <FaShoppingCart className="relative text-6xl sm:text-7xl text-emerald-400/80" />
            </div>

            <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-white shadow-lg"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight">404</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-8 h-4 border-b-[3px] border-emerald-400 rounded-b-full"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Oops! Nothing Here
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
            Looks like this page went out of stock! Don&apos;t worry, there&apos;s plenty more fresh content to explore.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full">
          <Link 
            href={'/'} 
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-1"
          >
            <FaHome className="group-hover:scale-110 transition-transform duration-300" />
            Go to Homepage
          </Link>

         
        </div>

        <div className="bg-white w-full rounded-3xl border border-gray-100 shadow-sm p-6">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Popular Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href={'/Products'} className="px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm hover:bg-emerald-100 transition-colors">
              All Products
            </Link>
            <Link href={'/Categories'} className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Categories
            </Link>
           
          
          </div>
        </div>

      </div>
    </div>
  );
}