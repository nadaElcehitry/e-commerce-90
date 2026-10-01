"use server"
import { ICreateReview } from "@/interface/createReview"
import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function CreateReviewProduct({ productId, payload }: { productId: string, payload: ICreateReview }) {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`${process.env.BASE_URL}/products/${productId}/reviews`, {
        method: 'POST',
        headers: {
            token:String(token) ,
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)

    })
    const data = await response.json()
    return data
}