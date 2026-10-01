"use client"

import { getCart } from "@/services/cartAction/getLoggedCart.service";
import { useSession } from "next-auth/react";
import {
    createContext,
    ReactNode,
    SetStateAction,
    useEffect,
    useState
} from "react";

type contextType = {
    cartNumber: number
    setCartNumber: React.Dispatch<SetStateAction<number>>
}

export const cartContext = createContext<contextType>({
    cartNumber: 0,
    setCartNumber: () => undefined
})

export function CartContextProvider({
    children
}: {
    children: ReactNode
}) {

    const [cartNumber, setCartNumber] = useState<number>(0)

    const { status } = useSession()


    async function getCartProducts() {

        const response = await getCart()

        if (response.status === "success") {

            const totalItems = response.data.products.reduce(
                (
                    total: number,
                    item: { count: number }
                ) => total + item.count,
                0
            )

            setCartNumber(totalItems)
        }
    }


    useEffect(() => {

        if (status === "authenticated") {

            getCartProducts()

        }

        if (status === "unauthenticated") {

            setCartNumber(0)

        }

    }, [status])


    return (
        <cartContext.Provider
            value={{
                cartNumber,
                setCartNumber
            }}
        >
            {children}
        </cartContext.Provider>
    )
}