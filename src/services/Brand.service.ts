export async function getBrands() {
    try {
        const response = await fetch(`${process.env.BASE_URL}/brands`)
        if (!response.ok) {
            throw new Error("Something occure");

        }
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}


