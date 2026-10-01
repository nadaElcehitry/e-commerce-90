import { NextAuthOptions } from 'next-auth'
import Credential from 'next-auth/providers/credentials'
import { jwtDecode } from "jwt-decode";
import { IDecoded } from '@/interface/Login.interface';

export const authOption: NextAuthOptions = {
    providers: [
        Credential({
            name: 'Login',
            credentials: {
                email: { label: 'Email', placeholder: "Enter your Email", type: 'email' },
                password: { label: 'password', placeholder: "Enter your password", type: 'password' },
            },
            async authorize(credentials) {
                //calling api
                let response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
                    method: 'post',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    headers: {
                        "content-type": 'application/json'
                    }

                })
                if (!response.ok) {
                    throw new Error(response.statusText);

                }
                let data = await response.json()
                const decoded: IDecoded = jwtDecode(data.token);
                return {
                    id: decoded?.id,
                    email: data.user.email,
                    name: data.user.name,
                    token: data.token
                }

            }
        })
    ],
    pages: {
        signIn: '/Login'
    },
    callbacks: {
        jwt({ user, token, trigger, session }) {
            if (user) {
                token.id = user.id
                token.token = user.token
                token.name = user.name
                token.email = user.email
            }

            if (trigger === "update" && session) {
                token.name = session.name
                token.email = session.email
            }

            return token
        },

        session({ session, token }) {

            session.user.id = String(token.id)
            session.user.name =String( token.name)
            session.user.email =String(token.email) 

            return session
        }
    }


}
