import { IRegister } from "@/interface/register.interface";

export async function regisetForm(payload: IRegister) {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      "content-type": 'application/json'
    }

  })
  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something occurred");
  }

  return data;


}