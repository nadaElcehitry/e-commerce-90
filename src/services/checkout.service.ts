"use server"
import { getMyToken } from "@/Utilities/getMyToken.utilities"

type Checkout = {
    city: string,
    phone: string,
    details: string
}
export async function CheckOutSession(cartId: string, formdata: Checkout) {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`${process.env.BASE_URL}/orders/checkout-session/${cartId}?url=${process.env.DOMAIN}`, {
        method: 'POST',
        headers: {
            token:String(token) ,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            shippingAddress: formdata

        })

    })
    const data = await response.json()
    return data
}