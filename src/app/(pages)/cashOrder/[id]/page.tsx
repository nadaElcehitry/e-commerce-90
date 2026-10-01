"use client"
import { FieldError, FieldLabel, Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from "react-hook-form"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { CashOrderSchema } from '@/Schema/cashOrder.schema'
import { CashOrder } from '@/services/cashOrder.service'
import { ICashOrder } from '@/interface/cashOrder.interface'
import { useRouter } from 'next/navigation'
import { toast } from "@/components/ui/toast"
import { cartContext } from "@/context/cartContext";
import { useContext } from "react"

export default function Cashorder() {
  const { id } = useParams<{ id: string }>()
      const { cartNumber, setCartNumber } = useContext(cartContext)

  let router = useRouter()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      city: '',
      phone: '',
      details: '',
      postalCode: ''
    },
    resolver: zodResolver(CashOrderSchema),
    mode: "onBlur"
  });

  async function handlePayment(value: ICashOrder) {
    const response = await CashOrder(id, value)
    if (response.status == "success") {
      toast.add({
        description: "🎉Order placed successfully! We're getting your items ready for delivery."
      });
setCartNumber(0)
      router.push('/');
    } else {
      toast.add({
        description:"your Cart is empty",
      });
    }
  }
  return (
    <section className="  bg-gray-50  py-16 " >



      <div className=" max-w-full mx-auto px-4 mt-8 md:mt-20 sm:max-w-4/5 md:max-w-3/4 lg:max-w-1/2  shadow-2xl bg-white p-10">

        <h1 className="text-center mb-8 text-3xl font-bold text-green-600">Shipping Details</h1>

        <form className="space-y-6" onSubmit={handleSubmit(handlePayment)}>

          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="city">City*</FieldLabel>
                <Input
                  {...field}
                  id="city"
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your City"
                  className="focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="details"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="details">Street Address*</FieldLabel>
                <Input
                  {...field}
                  id="details"
                  aria-invalid={fieldState.invalid}
                  placeholder="Street name ,building number,floor,apartment... "
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
          <Controller
            name="postalCode"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="postalCode">Postalcode*</FieldLabel>
                <Input
                  {...field}
                  id="postalCode"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your PostalCode "
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
              Checkout
            </Button>
            <Link href={'/cart'}>
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

