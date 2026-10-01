import Image from "next/image";
import {  FaRegEye, FaSyncAlt, FaStar } from "react-icons/fa";
import Link from "next/link";
import { IProduct } from '@/interface/product.interface';
import AddBtnCard from "../AddBtn/AddBtnCard";
import AddBtnWhislist from "../AddBtn/AddBtnWhislist";

export default function Card({ product }: { product: IProduct }) {
    return (
        <>
            <div key={product._id} className="group relative bg-white border border-gray-200 rounded-lg p-3 flex flex-col justify-between hover:shadow-lg  hover:-translate-y-1.5 transition-all ease-in-out">

                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-100 ">
                   <AddBtnWhislist productId={product?._id}/>
                    <button className="bg-white p-2 rounded-full text-gray-600 hover:text-green-600 transition-colors">
                        <FaSyncAlt size={14} />
                    </button>
                                        <Link href={`/Products/${product._id}`}>

                    <button className="bg-white p-2 rounded-full  text-gray-600 hover:text-green-600 transition-colors">
                        <FaRegEye size={14} />
                    </button>
                    </Link>
                </div>

                <div className="relative  bg-white rounded-md overflow-hidden mb-3 flex items-center justify-center">
                    <Image
                        src={product.imageCover}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="w-full h-60 object-contain bg-white"
                    />
                </div>

                <div className="flex flex-col grow">
                    <Link href={`/Products/${product._id}`}>

                        <span className="text-xs text-gray-400 mb-1">
                            {product.category?.name}
                        </span>
                        <h3 className="font-normal text-gray-800 text-sm line-clamp-2 mb-2">
                            {product.title}
                        </h3>
                    </Link>

                    <div className="flex items-center gap-1 mb-0">
                        <div className="flex text-yellow-400 text-xs">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < Math.floor(product.ratingsAverage || 4) ? "text-yellow-400" : "text-gray-300"} />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                            {product.ratingsAverage || " "} ({product.ratingsQuantity || 0})
                        </span>
                    </div>

                    <div className=" flex items-end justify-between mb-0">
                        <div>
                            <span className="font-bold text-gray-900 text-base">
                                {product.price} EGP
                            </span>
                        </div>
                        <AddBtnCard productId={product?._id} />
                    </div>
                </div>
            </div>
        </>
    )
}
