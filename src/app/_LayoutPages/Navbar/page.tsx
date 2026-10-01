"use client"
import Image from "next/image"
import logo from "../../../assets/freshcart-logo.49f1b44d.svg"
import Link from "next/link"
import { CiUser, CiHeart, CiHeadphones } from "react-icons/ci";
import { FiPhone, FiMail, FiTruck, FiGift } from "react-icons/fi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { cartContext } from "@/context/cartContext";
import { wishlistContext } from '@/context/whishlistContext';
import { FaBoxOpen } from "react-icons/fa6";
import DropDown from "@/app/_sharedComponent/dropDown/DropDown";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession()
  const { cartNumber } = useContext(cartContext)
  const { whishlistNumber } = useContext(wishlistContext)

  function logOut() {
    signOut({
      callbackUrl: '/Login'
    })
  }
  return (
    <>
      <header className="max-w-full fixed top-0 left-0 right-0 z-50  bg-white ">
        <div className="hidden lg:flex border-b border-slate-100 bg-white py-2 ">
          <div className="mx-auto flex max-w-7xl w-full items-center justify-between px-4 sm:px-6 lg:px-8 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <FiTruck className="text-green-600 text-sm" /> Free Shipping on Orders 500 EGP
              </span>
              <span className="flex items-center gap-1.5">
                <FiGift className="text-green-600 text-sm" /> New Arrivals Daily
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href={'tel:+18001234567'} className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
                <FiPhone className="text-slate-400" /> +1 (800) 123-4567
              </Link>
              <span className="text-slate-300">|</span>
              <Link href={'mailto:support@freshcart.com'} className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
                <FiMail className="text-slate-400" /> support@freshcart.com
              </Link>
              <span className="text-slate-300">|</span>
              {
                (session && (
                  <Link href='#'  className="hover:text-green-600 transition-colors">Sign out</Link>
                ))
              }
              {
                (!session && (
                  <Link href={'/Login'} className="hover:text-green-600 transition-colors">Sign In</Link>

                ))
              }

            </div>
          </div>
        </div>

        <nav className="border-b border-slate-200 py-3 shadow-sm" aria-label="Main navigation">
          <div className="mx-auto flex max-w-7xl items-center justify-between sm:px-6 lg:px-8 gap-4">

            <Link href={'/'} className="flex items-center gap-2.5 focus:outline-none rounded-lg shrink-0">
              <Image src={logo} alt="logo" />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex shrink-0">
              <li>
                <Link href={'/'} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-green-500 transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href={'/Products'} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-green-500 transition-all duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href={'/Categories'} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-green-500 transition-all duration-200">
                  Categories
                </Link>
              </li>
              <li>
                <Link href={'/Brands'} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-green-500 transition-all duration-200">
                  Brands
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-1 sm:gap-3 shrink-0">

    

              <Link
                href="/Whishlist"
                className="relative flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-emerald-600 hover:bg-slate-100 transition-all"
              >
                <CiHeart className="text-2xl" />

                {whishlistNumber > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold border-2 border-white">
                    {whishlistNumber}
                  </span>
                )}
              </Link>


              <Link
                href="/cart"
                className="relative flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-emerald-600 hover:bg-slate-100 transition-all"
              >
                <RiShoppingCart2Fill className="text-2xl" />

                {cartNumber > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold border-2 border-white">
                    {cartNumber}
                  </span>
                )}
              </Link>
              {session && (
             <div className="hidden lg:block">
                <DropDown/>

             </div>


              )}
              {!session && (
                <Link href={'/Login'} className="hidden md:inline-flex gap-2 items-center justify-center rounded-3xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-green-600/20 transition-all duration-200 hover:bg-green-700">
                  <CiUser className="text-lg" />Sign In
                </Link>

              )}

              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex cursor-pointer items-center  justify-center rounded-full bg-emerald-600 text-white me-2 ms-3 w-10 h-10 hover:bg-emerald-700 transition-colors lg:hidden shadow-md"
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {isOpen && (
                <div
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
                />
              )}

              <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-slate-200 bg-slate-50 shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex h-18 items-center justify-between border-b border-slate-200 px-5">
                  <Image src={logo} alt="logo" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer p-2 text-slate-500 hover:text-slate-700"
                  >
                    <IoMdClose className="text-xl" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto bg-white" aria-label="Mobile navigation">
                  <Link href={'/'} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 transition-all">Home</Link>
                  <Link href={'/Products'} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 transition-all">Shop</Link>
                  <Link href={'/Categories'} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 transition-all">Categories</Link>
                  <Link href={'/Brands'} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 transition-all">Brands</Link>

                  <div className="my-2 border-t border-slate-100"></div>

                  <Link href={'/Whishlist'} onClick={() => setIsOpen(false)} className="flex items-center rounded-2xl gap-3 px-2 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 transition-all">
                    <div className="p-2 rounded-full bg-red-100 text-slate-900 transition-all">
                      <CiHeart className="text-xl text-red-500" />
                    </div>
                    {whishlistNumber > 0 && (
                      <p>                    {whishlistNumber}
                      </p>
                    )}
                    <p>Wishlist</p>
                  </Link>


                  <Link href={'/cart'} onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-2xl px-2 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 transition-all">
                    <div className="p-2 rounded-full bg-green-50 text-green-500 transition-all">
                      <RiShoppingCart2Fill className="text-2xl" />
                    </div>
                    {cartNumber > 0 && (
                      <p>                    {cartNumber}
                      </p>
                    )}

                    <p>
                      Cart</p>
                  </Link>
                  <Link href={'/allorders'} onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-2xl px-2 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 transition-all">
                    <div className="p-2 rounded-full bg-green-50 text-green-500 transition-all">
                      <FaBoxOpen className="text-2xl" />
                    </div>

                    <p>
                      my Orders</p>
                  </Link>


                </nav>

                <div className="border-t border-slate-200 p-4 flex gap-2">
                  {(session && (
                    <Link href="#" onClick={() => { logOut(); setIsOpen(false) }} className="w-full flex items-center justify-center rounded-xl mx-auto bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-all">
                      Sign out
                    </Link>
                  ))}
                  {(!session && (
                    <Link href={'/Login'} onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center rounded-xl mx-auto bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-all">
                      Sign In
                    </Link>

                  ))}

                </div>

              </div>

            </div>

          </div>
        </nav>
      </header>
    </>
  )
}