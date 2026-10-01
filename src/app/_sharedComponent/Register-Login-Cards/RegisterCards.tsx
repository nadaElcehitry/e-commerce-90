import Image from 'next/image'
import { FaStar, FaTruckFast, FaShieldHalved } from 'react-icons/fa6'
import review from '../../../assets/review-author.png'
export default function RegisterCards() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-emerald-600">FreshCart</span>
        </h1>
        <p className="text-xl text-gray-600 mt-2 mb-4">
          Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
        </p>

        <ul className="space-y-6 my-8">
          <li className="flex items-start gap-4">
            <div className="size-12 text-lg bg-emerald-100 text-emerald-600 rounded-full flex justify-center items-center shrink-0">
              <FaStar />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Premium Quality</h2>
              <p className="text-gray-600">Premium quality products sourced from trusted suppliers.</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="size-12 text-lg bg-emerald-100 text-emerald-600 rounded-full flex justify-center items-center shrink-0">
              <FaTruckFast />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Fast Delivery</h2>
              <p className="text-gray-600">Same-day delivery available in most areas.</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="size-12 text-lg bg-emerald-100 text-emerald-600 rounded-full flex justify-center items-center shrink-0">
              <FaShieldHalved />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Secure Shopping</h2>
              <p className="text-gray-600">Your data and payments are completely secure.</p>
            </div>
          </li>
        </ul>

        <div className="review bg-white shadow-sm border border-gray-100 p-4 rounded-md">
          <div className="author flex items-center gap-4 mb-3">
            <div className="size-12 rounded-full bg-gray-200 overflow-hidden relative">
              <Image src={review} alt="review" className='object-cover'/>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
              <div className="rating flex text-yellow-400 text-sm gap-0.5">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
          <p className="italic text-gray-600 text-md">
            FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!&quot;
          </p>
        </div>
      </div>
    </>
  )
}
