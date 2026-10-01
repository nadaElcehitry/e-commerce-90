"use client"
import { FieldError, FieldLabel, Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from "react-hook-form"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from "@/components/ui/toast"
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaStar, FaUsers } from 'react-icons/fa'
import { useState } from 'react'
import LoginCards from '@/app/_sharedComponent/Register-Login-Cards/LoginCards'
import { loginSchema } from '@/Schema/Login.schema'
import { ILogin } from '@/interface/Login.interface'
import { signIn } from 'next-auth/react'
export default function Login() {
  let router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const { handleSubmit, control } = useForm({

    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: "onBlur"
  });

  async function handleLogin(values: ILogin) {
    const response = await signIn('credentials', {
      ...values,
      redirect: false
    })
    if (response?.ok) {
      toast.add({
        title: "Welcome Back! 🎉",
        description: "You have successfully signed in to your account.."
      });

      router.push('/');
    } else {
      toast.add({
        title: " Login Failed ❌",
        description: "Please check your email and password and try again.",
      });
    }



  }
  return (
    <main className="container py-16 mx-auto px-4 mt-8 md:mt-20" id="login-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        <LoginCards />

        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">

            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-green-600">Fresh<span className="text-gray-800">Cart</span></span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
              <p className="text-gray-600">Sign in to continue your fresh shopping experience</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email*</FieldLabel>
                    <div className="relative">
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Your Email"
                        autoComplete="email"
                        className="pl-12 py-5 focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                      />
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center justify-between mb-2">
                      <FieldLabel htmlFor="password">Password*</FieldLabel>
                      
                    </div>
                    <div className="relative">
                      <Input
                        {...field}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Your Password"
                        autoComplete="current-password"
                        className="pl-12 pr-12 py-5 focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                      />
                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />


              <Button
                type="submit"
                className="w-full bg-green-700 text-white py-5.5 px-4.5 rounded-xl hover:bg-green-800 transition-all duration-200 font-semibold text-md shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center mt-5 pt-4 border-t border-gray-100">
              <p className="text-gray-600">
                New to FreshCart?
                <Link className="text-green-600 hover:text-green-700 ms-2 font-medium cursor-pointer" href={'/Register'}>
                  Create an account
                </Link>
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
              <div className="flex items-center"><FaLock className="mr-1" />SSL Secured</div>
              <div className="flex items-center"><FaUsers className="mr-1" />50K+ Users</div>
              <div className="flex items-center"><FaStar className="mr-1" />4.9 Rating</div>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
