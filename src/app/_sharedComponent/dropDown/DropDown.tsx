"use client"

import { useEffect, useRef, useState } from "react"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react";

import { FaBoxOpen, FaRegUserCircle } from "react-icons/fa"
import { GoSignOut } from "react-icons/go";

export default function UserDropdown() {

    const [isOpen, setIsOpen] = useState(false)
    const { data: session } = useSession()

    function logOut() {
        signOut({
            callbackUrl: '/Login'
        })
    }
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {

            if (

                dropdownRef.current &&

                !dropdownRef.current.contains(event.target as Node)

            ) {

                setIsOpen(false)

            }

        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {

            document.removeEventListener("mousedown", handleClickOutside)

        }

    }, [])

    function closeDropdown() {

        setIsOpen(false)

    }

    return (

        <div

            ref={dropdownRef}

            className=" dropdown relative"

        >


            <button

                onClick={() => setIsOpen(prev => !prev)}

                className="flex items-center space-x-2 focus:outline-none group"

            >

                <div className=" flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-emerald-600 hover:bg-slate-100 transition-all">

                    <FaRegUserCircle className="text-2xl" />

                </div>

            </button>


            <div

                className={`

                    absolute right-0 mt-2 w-50 bg-white rounded-lg

                    shadow-xl py-1 z-50

                    border border-gray-100

                    transition-all duration-300

                    transform

                    ${isOpen

                        ? "opacity-100 visible translate-y-0"

                        : "opacity-0 invisible -translate-y-2"

                    }

                `}

            >


                <div className="px-4 py-3 border-b border-gray-100">

                    <div className="flex items-center">

                        <div className="rounded-full  flex items-center  bg- justify-center text-emerald-600 bg-slate-100 overflow-hidden mr-3">

                            <FaRegUserCircle className="text-2xl" />

                        </div>

                        <div>

                            <p className="font-medium text-gray-900">

                                {session?.user.name}

                            </p>

                            <p className="text-sm text-gray-500">

                                {session?.user.email}

                            </p>

                        </div>

                    </div>

                </div>


                <Link

                    href="/allorders"

                    onClick={closeDropdown}

                    className="px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 flex items-center gap-3 transition-colors duration-200"

                >

                    <FaBoxOpen />

                    My order

                </Link>
                <Link

                    href={'/updateUserProfile'}

                    onClick={closeDropdown}

                    className="px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 flex items-center gap-3 transition-colors duration-200"

                >

                    <FaRegUserCircle />

                    update Profile

                </Link>
                <div className="border-t border-gray-100 " />


                <Link href="#" onClick={() => { logOut(), closeDropdown() }} className="px-4 py-2.5 flex items-center  gap-2  text-red-500 hover:text-red-600 hover:bg-slate-100 transition-all duration-200 ">
                    <GoSignOut />
                    Sign Out
                </Link>

            </div>

        </div>

    )

}