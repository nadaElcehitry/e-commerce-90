export async function getBrands() {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`)
        if (!response.ok) {
            throw new Error("Something occure");

        }
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}


