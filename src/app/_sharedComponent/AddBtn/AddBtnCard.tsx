"use client"
import { addProductToCart } from '@/services/cartAction/AddCart.service'
import { FaPlus } from "react-icons/fa";
import { toast } from "@/components/ui/toast"
import { cartContext } from "@/context/cartContext";
import { useContext } from 'react';
export default function AddBtnCard({ productId }: { productId: string }) {
    const { setCartNumber } = useContext(cartContext)

    async function AddBtnCard() {
        try {
            const response = await addProductToCart(productId)
            if (response.status == "success") {
                toast.add({
                    title: "success",
                    description: response.message,
                });
const totalItems = response.data.products.reduce(
        (total:number, item :{count:number}) => total + item.count,
        0
    );      
          setCartNumber(totalItems)

            } else {
                toast.add({
                    title: "Error",
                    description: response.message,
                });
            }
        } catch (error: any) {
            toast.add({
                title: "Error",
                description: error.message || "Failed to add product. Please check your connection.",
            })

        }

    }
    return (
        <>
            <button onClick={() => { AddBtnCard() }} className=" bg-emerald-600 hover:bg-emerald-700 text-white w-8 h-8 rounded-full flex items-center justify-center ">
                <FaPlus size={12} />
            </button>
        </>
    )
}
