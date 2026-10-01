import React from 'react'
import { FaTruck, FaClock } from 'react-icons/fa'
import { FaShieldHalved } from 'react-icons/fa6'
import Login from "../../../assets/Login.png"
import Image from 'next/image'
export default function LoginCards() {
  return (
    <>
     <div className="hidden lg:block">
          <div className="text-center space-y-6">
            <Image 
              className="w-full h-96 object-cover rounded-2xl shadow-lg" 
              alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme" 
              src={Login} 
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">FreshCart - Your One-Stop Shop for Fresh Products</h2>
              <p className="text-lg text-gray-600">Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center"><FaTruck className="text-green-600 mr-2" />Free Delivery</div>
                <div className="flex items-center"><FaShieldHalved className="text-green-600 mr-2" />Secure Payment</div>
                <div className="flex items-center"><FaClock className="text-green-600 mr-2" />24/7 Support</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
