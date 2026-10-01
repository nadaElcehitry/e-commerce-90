"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdDelete, MdFavorite } from "react-icons/md";
import Link from "next/link"
import { toast } from "@/components/ui/toast"
import { getWhishlist } from "@/services/Whishlist/getLoggedWhishlist.service"
import { IProduct } from "@/interface/product.interface";
import { removeWhishlistItems } from "@/services/Whishlist/removeWhishlist.service";
import AddBtnCard from "../AddBtn/AddBtnCard";
import { RingLoader } from "react-spinners";
import { FaHeartPulse } from "react-icons/fa6";
import { useContext } from 'react';
import { wishlistContext } from '@/context/whishlistContext';
export default function WhishlistCard() {
    let [whishList, setwhishList] = useState([])
    let [isLoading, setIsLoading] = useState(true)
 const {
    setwhishlistNumber,
    setwhishlistIds
} = useContext(wishlistContext)    

    async function getCartProduct() {
        try {
            setIsLoading(true)

            const response = await getWhishlist()
            setwhishList(response.data)

        } catch {
            toast.add({
                description: "there is an error, please check you internet"
            });
        } finally {
            setIsLoading(false)
        }

    }
    async function removeItem(productId: string) {

    try {

        const response = await removeWhishlistItems(productId)

        if (response.status === "success") {

            setwhishList((prev) =>
                prev.filter(
                    (product: IProduct) =>
                        product._id !== productId
                )
            )

            setwhishlistNumber((prev) => prev - 1)

            setwhishlistIds((prev) =>
                prev.filter((id) => id !== productId)
            )

            toast.add({
                description: response.message
            })
        }

    } catch {

        toast.add({
            description:
                "there is an error, please check you internet."
        })

    }
}


    useEffect(() => {
        getCartProduct()
    }, [])
    if (isLoading) {
        return (<div className="min-h-screen flex justify-center items-center">

            <RingLoader color="#5d900a" size={54} />
        </div>)
    }
    return (
        <div className="mt-20 md:mt-32 pb-16">

            <div className="mb-10">

                <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-red-50">
                        <MdFavorite className="text-red-500 text-2xl" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        My Wishlist
                    </h1>
                </div>


                <div className="h-px mx-3 md:mx-0 bg-gray-200 flex-1"></div>

            </div>
            {whishList.length > 0 ?


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">

                    {whishList?.map((product: IProduct) => {


                        return (
                            <div
                                key={product._id}
                                className="group relative bg-white border border-gray-100 rounded-2xl p-4
                        shadow-sm hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300"
                            >

                                <button
                                    onClick={() => removeItem(product._id)}
                                    className="absolute top-3 right-3 z-10
                            w-9 h-9 rounded-full bg-white shadow-md
                            flex items-center justify-center
                            text-gray-400 hover:text-red-500
                            hover:bg-red-50 transition-all"
                                >
                                    <MdDelete className="text-xl" />
                                </button>


                                {/* Image */}
                                <div className="relative bg-gray-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">

                                    <Image
                                        src={product.imageCover}
                                        alt={product.title}
                                        width={300}
                                        height={300}
                                        className="w-full h-60 object-contain bg-white" />

                                </div>


                                <div className="flex flex-col grow">

                                    <Link href={`/Products/${product._id}`}>
                                        <h3 className="font-medium text-gray-800 text-sm
                                hover:text-green-600 transition-colors">
                                            {product.title}
                                        </h3>
                                    </Link>


                                    <div className="flex items-center justify-between mt-2">

                                        <span className="font-bold text-gray-900 text-base">
                                            {product.price} EGP
                                        </span>

                                        <AddBtnCard productId={product._id} />

                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div>
                :
                <div className="col-span-10">
                    <div className="text-center py-20  rounded-2xl shadow-xs p-8 max-w-xl mx-auto my-6">
                        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5 text-green-500 text-3xl">
                            <FaHeartPulse />

                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Your Wishlist is empty</h3>
                        <p className="text-gray-500 mb-6 text-sm sm:text-base">You haven't saved any items to your wishlist yet. Discover our collection and save your favorite products!
                            Explore Products</p>
                        <Link
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-sm"
                            href={'/'}
                        >
                            Start Shopping
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}
