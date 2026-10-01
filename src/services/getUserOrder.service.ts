
import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function  getUserOrder(userId:string){

     const token = await getMyToken()
     if(!token){
        throw new Error('Login first please!')
     }
    const response =  await fetch(`${process.env.BASE_URL}/orders/user/${userId}`,{
        method:'GET',
        headers:{
            token:String(token) ,
            'content-type':'application/json'
        },
        
    })
    const data = await response.json()
    return data
}