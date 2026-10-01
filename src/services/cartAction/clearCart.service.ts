"use server"

import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function clearCart() {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`$https://ecommerce.routemisr.com/api/v1/cart`, {
        method: 'DELETE',
        headers: {
            token:String(token) ,
            'content-type': 'application/json'
        },

    })
    const data = await response.json()
    return data
}