"use client"
import { IProductCard } from "@/interface/productCartTable.interface"
import { getCart } from "@/services/cartAction/getLoggedCart.service"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Link from "next/link"
import { removeCartItems } from "@/services/cartAction/removeCart.service"
import { toast } from "@/components/ui/toast"
import { FaCartArrowDown } from "react-icons/fa";
import { clearCart } from "@/services/cartAction/clearCart.service"
import { updateCart } from "@/services/cartAction/updateCart.service"
import { RingLoader } from "react-spinners";
import { cartContext } from "@/context/cartContext";

export default function ProductTable() {
    let [productList, setProducts] = useState<IProductCard[]>([])
    let [totalPrice, setTotalPrice] = useState<number>(0)
    let [isLoading, setIsLoading] = useState(true)
    const { cartNumber, setCartNumber } = useContext(cartContext)
    let [cartId, setCartId] = useState<number>(0)


    async function getCartProduct() {
        try {
            setIsLoading(true)
            const response = await getCart()
            setProducts(response.data.products)
            setTotalPrice(response.data.totalCartPrice)
            const totalItems = response.data.products.reduce(
                (total: number, item: { count: number }) => total + item.count,
                0
            );
            setCartNumber(totalItems)
            setCartId(response.cartId)
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
            const response = await removeCartItems(productId)
            if (response.status == "success") {
                setProducts(response.data.products)
                setTotalPrice(response.data.totalCartPrice)
                const totalItems = response.data.products.reduce(
                    (total: number, item: { count: number }) => total + item.count,
                    0
                );
                setCartNumber(totalItems)
                toast.add({
                    description: "The product has been successfully removed from your cart."
                });
            }

        } catch {
            toast.add({
                description: "there is an error, please check you internet."
            });
        }

    }

    async function clearCartItems() {
        try {
            const response = await clearCart()
            if (response.message == "success") {
                getCartProduct()
                toast.add({
                    description: "All items have been successfully removed from your shopping cart."
                });
            }

        } catch {
            toast.add({
                description: "there is an error, please check you internet."
            });
        }

    }

    async function updateCartItems(productId: string, count: number) {
        try {
            const response = await updateCart(productId, count)
            if (response.status == "success") {
                setProducts(response.data.products)
                setTotalPrice(response.data.totalCartPrice)
                const totalItems = response.data.products.reduce(
                    (total: number, item: { count: number }) => total + item.count,
                    0
                );
                setCartNumber(totalItems)
            }

        } catch {
            toast.add({
                description: "there is an error, please check you internet"
            });
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 gap-x-5 mt-10 md:mt-30 max-w-7xl mx-auto">
            {productList.length > 0 ?
                <>

                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            {productList.map((product: IProductCard) => {

                                return <div key={product.product._id} className="relative bg-white rounded-2xl shadow-sm border border-gray-100 mx-3 ">
                                    <div className="p-4 sm:p-5">
                                        <div className="flex gap-4 sm:gap-6">
                                            <Link className="relative shrink-0 group" href={`/Products/${product._id}`}>
                                                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                                                    <Image width={200} height={180} alt={product.product.title} src={product.product.imageCover} className="object-cover" />
                                                </div>

                                            </Link>
                                            <div className="flex-1 min-w-0 flex flex-col">
                                                <div className="mb-3">
                                                    <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White</h3>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="inline-block px-2.5 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-primary-700 text-xs font-medium rounded-full">{product.product.category.name}</span>
                                                    </div>
                                                </div>
                                                <div className="mb-4">

                                                </div>
                                                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                                            <button onClick={() => { updateCartItems(product.product._id, product.count - 1) }} className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50   transition-all" aria-label="Decrease quantity">
                                                                <FaMinus />

                                                            </button>
                                                            <span className="w-12 text-center font-bold text-gray-900">{product.count}</span>
                                                            <button onClick={() => { updateCartItems(product.product._id, product.count + 1) }} className="h-8 w-8 rounded-lg bg-primary-600 shadow-sm  flex items-center justify-center text-green-600 hover:bg-green-700  transition-all" aria-label="Increase quantity">
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-right">
                                                            <p className="text-xs text-gray-400 mb-0.5">price</p>
                                                            <p className="text-xl font-bold text-gray-900 ">{product.price}
                                                                <span className="text-sm font-medium text-gray-400 ms-3">EGP</span>
                                                            </p>
                                                        </div>
                                                        <button onClick={() => { removeItem(product.product._id) }} className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center  transition-all duration-200" title="Remove item" aria-label="Remove from cart">
                                                            <MdDelete />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="mt-6 mx-3 pt-6 mb-5 border-t border-gray-200 flex items-center justify-between">
                            <Link className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2" href={'/'}><span>←
                            </span> Continue Shopping</Link>
                            <button onClick={() => { clearCartItems() }} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50">
                                <MdDelete />

                                <span>Clear all items</span>
                            </button>
                        </div>
                    </div>
                    <div className=" lg:col-span-1">
                        <div className=" mx-3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                            <div className="bg-gray-50 px-6 py-5 border-b border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Order Summary
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    {cartNumber} items in your cart
                                </p>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <div className="flex items-center justify-between">
                                    <span className="text-base text-gray-600">
                                        Total Price
                                    </span>

                                    <span className="text-2xl font-bold text-green-600">
                                        {totalPrice} EGP
                                    </span>
                                </div>

                                <div className="my-6 border-t border-gray-200"></div>

                                {/* Payment Buttons */}
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href={`/checkout/${cartId}`}>
                                        <button
                                            type="button"
                                            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
                                        >
                                            Pay with Card
                                        </button>
                                    </Link>
                                    <Link href={`/cashOrder/${cartId}`}>
                                        <button
                                            type="button"
                                            className="w-full rounded-lg border border-green-600 px-4 py-3 font-semibold text-green-600 transition hover:bg-green-50"
                                        >
                                            Pay with Cash
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="col-span-10">
                    <div className="text-center py-20   p-8 max-w-xl mx-auto my-6">
                        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5 text-green-500 text-3xl">
                            <FaCartArrowDown />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Your cart is empty</h3>
                        <p className="text-gray-500 mb-6 text-sm sm:text-base">Looks like you haven't added anything to your cart yet.
                            Start exploring our products!</p>
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
