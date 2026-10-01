"use server"

import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function addProductToWhislist(productId: string) {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
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