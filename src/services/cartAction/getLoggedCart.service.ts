"use server"

import { toast } from "@/components/ui/toast";
import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function  getCart(){

     const token = await getMyToken()
     if(!token){
toast.add({
                description: "please login first"
            });     }
    const response =  await fetch(`${process.env.BASE_URL}/cart`,{
        method:'GET',
        headers:{
            token:String(token) ,
            'content-type':'application/json'
        },
        
    })
    const data = await response.json()
    return data
}