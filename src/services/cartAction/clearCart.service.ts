"use server"

import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function clearCart() {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`${process.env.BASE_URL}/cart`, {
        method: 'DELETE',
        headers: {
            token:String(token) ,
            'content-type': 'application/json'
        },

    })
    const data = await response.json()
    return data
}