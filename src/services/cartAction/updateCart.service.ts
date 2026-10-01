"use server"

import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function  updateCart(productId:string , count:number){

     const token = await getMyToken()
     if(!token){
        throw new Error('Login first please!')
     }
    const response =  await fetch(`${process.env.BASE_URL}/cart/${productId}`,{
        method:'PUT',
        headers:{
            token:String(token) ,
            'content-type':'application/json'
        },
        body: JSON.stringify({count:count})
        
    })
    const data = await response.json()
    return data
}