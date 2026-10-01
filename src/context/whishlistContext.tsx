"use client"

import { toast } from "@/components/ui/toast"
import { getWhishlist } from "@/services/Whishlist/getLoggedWhishlist.service"

import {
    createContext,
    ReactNode,
    SetStateAction,
    useEffect,
    useState
} from "react"

import { useSession } from "next-auth/react"

type contextType = {
    whishlistNumber: number
    whishlistIds: string[]

    setwhishlistNumber: React.Dispatch<SetStateAction<number>>
    setwhishlistIds: React.Dispatch<SetStateAction<string[]>>

    refreshWishlist: () => Promise<void>
}

export const wishlistContext = createContext<contextType>({
    whishlistNumber: 0,
    whishlistIds: [],

    setwhishlistNumber: () => undefined,
    setwhishlistIds: () => undefined,

    refreshWishlist: async () => {}
})

export function WhishListContextProvider({
    children
}: {
    children: ReactNode
}) {

    const [whishlistNumber, setwhishlistNumber] = useState<number>(0)

    const [whishlistIds, setwhishlistIds] = useState<string[]>([])

    const { status } = useSession()


    async function refreshWishlist() {

        try {

            const response = await getWhishlist()

            if (response.status === "success") {

                setwhishlistNumber(response.count)

                const ids = response.data.map(
                    (product: any) => product._id
                )

                setwhishlistIds(ids)
            }

        } catch {

        
        }
    }


    useEffect(() => {

        if (status === "authenticated") {

            refreshWishlist()

        }

        if (status === "unauthenticated") {

            setwhishlistNumber(0)
            setwhishlistIds([])

        }

    }, [status])


    return (
        <wishlistContext.Provider
            value={{
                whishlistNumber,
                setwhishlistNumber,

                whishlistIds,
                setwhishlistIds,

                refreshWishlist
            }}
        >
            {children}
        </wishlistContext.Provider>
    )
}