"use server"
import { getMyToken } from "@/Utilities/getMyToken.utilities"

type Checkout = {
    city: string,
    phone: string,
    details: string,
    postalCode: string
}
export async function CashOrder(cartId: string, formdata: Checkout) {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`, {
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