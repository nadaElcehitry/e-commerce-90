"use client"

import { FaHeart, FaRegHeart } from "react-icons/fa"
import { toast } from "@/components/ui/toast"
import { addProductToWhislist } from "@/services/Whishlist/addWhishlist.service"
import { removeWhishlistItems } from "@/services/Whishlist/removeWhishlist.service"

import { useContext, useState } from "react"
import { wishlistContext } from "@/context/whishlistContext"

export default function AddBtnWhislist({productId}: { productId: string}) {

    const {
        whishlistIds,
        setwhishlistIds,
        setwhishlistNumber
    } = useContext(wishlistContext)

    const [isLoading, setIsLoading] = useState(false)

    const isWishlist = whishlistIds.includes(productId)


    async function toggleWishlist() {

        if (isLoading) return

        try {

            setIsLoading(true)

            if (isWishlist) {

                // Remove
                const response = await removeWhishlistItems(productId)

                if (response.status === "success") {

                    setwhishlistIds((prev) =>
                        prev.filter((id) => id !== productId)
                    )

                    setwhishlistNumber((prev) => prev - 1)

                    toast.add({
                        title: "Removed",
                        description: response.message
                    })
                }

            } else {

                const response = await addProductToWhislist(productId)

                if (response.status === "success") {

                    setwhishlistIds((prev) => [
                        ...prev,
                        productId
                    ])

                    setwhishlistNumber((prev) => prev + 1)

                    toast.add({
                        title: "Added",
                        description: response.message
                    })
                }

            }

        } catch (error: any) {

            toast.add({
                title: "Error",
                description:
                    error.message ||
                    "Something went wrong. Please try again."
            })

        } finally {

            setIsLoading(false)

        }
    }


    return (
        <button
            onClick={toggleWishlist}
            disabled={isLoading}
            className={`
                p-2 rounded-full  transition-colors
                ${isWishlist
                    ? "bg-red-50 text-red-600"
                    : "bg-white text-gray-600 hover:text-red-600"
                }
            `}
        >

            {isWishlist ? (
                <FaHeart size={14} />
            ) : (
                <FaRegHeart size={14} />
            )}

        </button>
    )
}