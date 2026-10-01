"use client"
import { FieldDescription, FieldError, FieldLabel, Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller,  useForm } from "react-hook-form"
import Link from 'next/link'
import { FaUserPlus } from 'react-icons/fa6'
import RegisterCards from '@/app/_sharedComponent/Register-Login-Cards/RegisterCards'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/Schema/Register.schema'
import { useRouter } from 'next/navigation'
import { toast } from "@/components/ui/toast"
import { regisetForm } from '@/services/Register.services'
import { IRegister } from '@/interface/register.interface'
export default function Register() {

  let router = useRouter()
  const { handleSubmit, control } = useForm({

    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    mode: "onBlur"
  });

  async function handleRegister(values: IRegister) {
    try {
      let response = await regisetForm(values)
     if(response){
 toast.add({
        title: "Welcome to FreshCart! 🎉",
        description: "Your account has been created successfully."
      });

      router.push('/Login');
     }
     

    } catch (error: any) {
      toast.add({
        title: "Registration Failed ❌",
        description: error.message || "Please check your data and try again.",
      });
    }
  }

  return (
    <section className="py-10 mt-8 md:mt-20">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 items-center">
        <RegisterCards />

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-10">
          <h2 className="text-center text-3xl font-semibold mb-2 text-gray-800">Create Your Account</h2>
          <p className="text-center text-gray-500 mb-8">Start your fresh journey with us today</p>



          <form className="space-y-5" onSubmit={handleSubmit(handleRegister)} >

            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Name*</FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali"
                    autoComplete="name"
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
                    placeholder="ali@example.com"
                    autoComplete="email"
                    className="focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password*</FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="create a strong password"
                    autoComplete="new-password"
                    className="focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                  />
                  <FieldDescription>
                    Must be at least 8 characters with numbers and symbols
                  </FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rePassword">Confirm Password*</FieldLabel>
                  <Input
                    {...field}
                    id="rePassword"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="confirm your password"
                    autoComplete="new-password"
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

            <Button
              type="submit"
              className="btn bg-green-700  text-white hover:bg-green-800 w-full py-5  rounded-lg flex items-center justify-center gap-2 transition-colors font-medium mt-2"
            >
              <FaUserPlus />
              <span>Create My Account</span>
            </Button>
          </form>

          <p className="border-t border-gray-200 pt-6 mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <Link className="text-emerald-600 hover:underline font-medium" href={'/Login'}>
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}