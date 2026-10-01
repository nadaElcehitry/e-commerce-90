
 "use server"

export async function getAllProductReview(productId:string) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/products/${productId}/reviews`)
        if(!response.ok){
            throw new Error("Something occure");
        
        }
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}