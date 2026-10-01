"use server"
import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function addProductToCart(productId: string) {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`${process.env.BASE_URL}/cart`, {
        method: 'POST',
        headers: {
            token:String(token) ,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ productId: productId })

    })
    const data = await response.json()
    return data
}