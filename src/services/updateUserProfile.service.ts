import { IUserUpdate } from "@/interface/userUpdate.interface"
import { getMyToken } from "@/Utilities/getMyToken.utilities"

export async function updateUserProfile(payload:IUserUpdate) {

    const token = await getMyToken()
    if (!token) {
        throw new Error('Login first please!')
    }
    const response = await fetch(`${process.env.BASE_URL}/users/updateMe/`, {
        method: 'PUT',
        headers: {
            token:String(token) ,
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)

    })
    const data = await response.json()
    return data
}