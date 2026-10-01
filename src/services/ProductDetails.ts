export async function getDetails(productId:string) {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
        if(!response.ok){
            throw new Error("Something occure");
        
        }
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}