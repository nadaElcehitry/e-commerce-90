"use client"
import { FieldError, FieldLabel, Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from "react-hook-form"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from "@/components/ui/toast"

import { updateUserSchema } from '@/Schema/userUpdate.schem'
import { IUserUpdate } from '@/interface/userUpdate.interface'
import { updateUserProfile } from '@/services/updateUserProfile.service'
import { useSession } from 'next-auth/react'
export default function updateUser() {
    let router = useRouter()
    const {update} = useSession()
    const { handleSubmit, control } = useForm({

        resolver: zodResolver(updateUserSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
        mode: "onBlur"
    });

    async function handleUpdate(values: IUserUpdate) {

        const response = await updateUserProfile(values)
        if (response.message === "success"){
            await update({
                name :values.name,
                email:values.email
            })
            toast.add({
                description: "success to update profile"
            });
            router.push('/');
        } else {
            toast.add({
                description: "Failed to update profile",
            });
        }

    }
    return (
        <section className="  bg-gray-50  py-16 " >



            <div className=" max-w-full mx-auto px-4 mt-8 md:mt-20 sm:max-w-4/5 md:max-w-3/4 lg:max-w-1/2  shadow-2xl bg-white p-10">

                <div className="text-center mb-8">
               
              <h1 className="text-2xl font-bold text-green-600 mb-2">Profile Information</h1>
              <p className="text-gray-600"> Update your personal details</p>
            </div>
                <form className="space-y-6" onSubmit={handleSubmit(handleUpdate)}>

                    <Controller
                        name="name"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="name">Full Name*</FieldLabel>
                                <Input
                                    {...field}
                                    id="name"
                                    type="text"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter Your Name"
                                    className="focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="email">Email*</FieldLabel>
                                <Input
                                    {...field}
                                    id="email"
                                    type="email"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="enter your email "
                                    className="focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    <Controller
                        name="phone"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="phone">Phone Number*</FieldLabel>
                                <Input
                                    {...field}
                                    id="phone"
                                    type="tel"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="+1 234 567 8900"
                                    autoComplete="tel"
                                    className="focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />



   <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>


            <Button
              type="submit"
              className=" bg-green-700 text-white py-5.5 px-4.5 rounded-xl hover:bg-green-800 transition-all duration-200 font-semibold text-md shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              save changes
            </Button>
            <Link href={'/'}>
              <Button
                className=" w-full bg-green-700 text-white py-5.5 px-4.5 rounded-xl hover:bg-green-800 transition-all duration-200 font-semibold text-md shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </Button>
            </Link>

          </div>
                </form>



            </div>

        </section>
    )
}
