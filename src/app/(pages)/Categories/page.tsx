import { ICategory } from "@/interface/category.interface";
import { categoryResponse } from "@/interface/response.type";
import { getCategories } from "@/services/category.service";
import Link from "next/link";
import { FaLayerGroup } from "react-icons/fa";

export default async function Categories() {
    const data: categoryResponse = await getCategories();
    
    const categoriesList = data?.data.slice(0, 10);

    return (
      <>
        <div className="w-full min-h-screen pb-16 mt-10 md:mt-25">
       
    <div className="w-full bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white shadow-md mb-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
           <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
             <Link className="hover:text-white transition-colors" href={'/'}>Home</Link>
             <span className="text-white/40">/</span>
             <span className="text-white font-medium">Categories</span>
           </nav>
           
           <div className="flex items-center gap-5">
             <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 text-white text-3xl">
<FaLayerGroup />
             </div>
             <div>
               <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">All Categories</h1>
               <p className="text-white/80 mt-1">Browse our wide range of product categories</p>
             </div>
           </div>
         </div>
       </div>
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categoriesList.map((cat: ICategory) => {
              return (
                <Link 
                  href={`/Categories/${cat._id}`} 
                  key={cat._id}
                  className="group flex flex-col items-center bg-white p-4 rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="w-28 h-28 sm:w-32 sm:h-32 relative rounded-full overflow-hidden mb-3 border-2 border-green-100 group-hover:border-green-500 transition-colors">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-800 text-center group-hover:text-green-600 transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                </Link>
              );
            })}
          </div>
       </section>
          
        </div>
      </>
    );
}