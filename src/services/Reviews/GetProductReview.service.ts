
 "use server"

export async function getAllProductReview(productId:string) {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews`)
        if(!response.ok){
            throw new Error("Something occure");
        
        }
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}