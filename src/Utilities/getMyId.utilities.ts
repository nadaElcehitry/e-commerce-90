"use server"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getMyID() {
    const cookieStore = await cookies();
    
    const decodedToken =
        cookieStore.get("__Secure-next-auth.session-token")?.value ??
        cookieStore.get("next-auth.session-token")?.value;
    
    const token = await decode({
        token: decodedToken,
        secret: process.env.NEXTAUTH_SECRET!,
    });
    return token?.id
}