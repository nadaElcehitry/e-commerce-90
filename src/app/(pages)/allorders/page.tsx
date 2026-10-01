"use server"
import { CartItem, IUserOrder } from "@/interface/userOrder.interface";
import { getUserOrder } from "@/services/getUserOrder.service"
import { getMyID } from "@/Utilities/getMyId.utilities";
import Image from "next/image";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { FaBoxOpen } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { toast } from "@/components/ui/toast";

export default async function AllOrders() {
  let userId = await getMyID();
  if (!userId) {
toast.add({
                description: "please login first"
            });
  }
  const data = await getUserOrder(String(userId))
  return (
    <div className="mt-30 min-h-screen ">
      <div className=" max-w-7xl mx-auto mt-2 md:mt-5">

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-green-50">
            <FaBox
              className="text-green-500 text-2xl" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Orders
          </h1>
        </div>


        <div className="h-px mx-3 md:mx-0 bg-gray-200 flex-1"></div>

      </div>
      <div className="grid grid-cols-1 gap-8 mt-5 md:mt-10 max-w-7xl mx-auto mb-5">

        {data.length > 0 ?
          <>

            {data?.map((order: IUserOrder) => {
              return <div key={order._id} className="relative bg-white rounded-2xl shadow-sm border p-4 border-gray-100 mx-3 ">
                <div className="flex items-center justify-between">



                  {/* Images */}

                  <div className="flex flex-wrap gap-2 justify-start">

                    {order.cartItems.map((items: CartItem) => (

                      <div

                        key={items._id}

                        className="relative w-20 h-20 rounded-xl overflow-hidden border"

                      >

                        <Image

                          width={100}

                          height={100}

                          alt={items.product.title}

                          src={items.product.imageCover}

                          className="w-full h-full object-contain"

                        />

                        <span className="absolute top-1 right-1 min-w-6 h-6 px-1.5 flex items-center justify-center rounded-full bg-black/70 text-white text-xs font-bold">

                          <FaPlus /> {items.count}

                        </span>

                      </div>

                    ))}

                  </div>

                  {/* Payment */}

                  <div className={`px-2.5 py-1 rounded-lg ${order.isPaid ? "bg-green-300" : "bg-red-400"} bg-green-300 shrink-0`}>

                    <span className={`text-xs font-semibold ${order.isPaid ? "text-green-600" : "text-white"} `}>
                      {order.isPaid ? "Paid" : "UnPaid"}


                    </span>

                  </div>

                </div>

                <div className="flex-1 min-w-0 mt-3">
                  <div className="mb-3 flex flex-col items-start gap-2">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2 ${data.isDelivered ? "bg-green-200" : "bg-blue-100"}`}>
                      {order.isDelivered ?
                        <>
                          <IoMdDoneAll className="text-green-600" />

                          <span className="text-xs font-semibold text-green-600"> Deliverd</span>
                        </>
                        :
                        <>
                          <FaCarSide className="text-blue-600" />

                          <span className="text-xs font-semibold text-blue-600"> on the way</span>
                        </>}

                    </div>
                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-1"><HiHashtag className="text-gray-300" /> {order.id}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-2"> <SlCalender />{new Date(order.createdAt)
                        .toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replaceAll(" ", "-")}<GoDotFill /> </span>
                      <span className="flex items-center gap-2"> <FaBoxOpen /> {order.cartItems.reduce((total, item) => total + item.count, 0)} Items items  </span>
                      <span className="flex items-center gap-2"> <MdLocationPin /> {order.shippingAddress.city}  </span>

                    </div>
                    <div className="flex items-center ">
                      <span className="text-2xl font-bold text-gray-900">{order.totalOrderPrice}</span>
                      <span className="text-sm font-medium text-gray-400 ml-1">EGP</span>

                    </div>
                  </div>

                </div>
              </div>
            })}

          </>
          :
          <div className="text-center py-20   p-8 max-w-xl mx-auto my-6">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5 text-green-500 text-3xl">
              <MdOutlineShoppingCartCheckout />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No orders yet!</h3>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">You haven't placed any orders yet. Start shopping and fill your list with amazing items!</p>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-sm"
              href={'/'}
            >
              Start Shopping
            </Link>
          </div>

        }
      </div>

    </div >


  )
}
