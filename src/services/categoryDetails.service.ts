

export async function getCatDetails(catId:string) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/categories/${catId}`)
        if(!response.ok){
            throw new Error("Something occure");
        
        }
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}