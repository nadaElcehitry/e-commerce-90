"use client"
import { addProductToCart } from '@/services/cartAction/AddCart.service'
import { toast } from "@/components/ui/toast"
import { cartContext } from "@/context/cartContext";
import { useContext } from 'react';

export default function AddBtn({ productId }: { productId: string }) {
    const { setCartNumber } = useContext(cartContext)

  async function AddBtn() {
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
        title: "Network Error",
        description: error.message || "Failed to add product. Please check your connection.",
      }) 

    }
  }
  return (
    <>
      <button onClick={() => { AddBtn() }} className="bg-emerald-600  ml-2 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer active:scale-98">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        Add to Cart
      </button>
    </>
  )
}
