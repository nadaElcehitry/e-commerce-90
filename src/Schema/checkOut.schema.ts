import * as zod from 'zod'
export const CheckOutSchema = zod.object({
    city: zod.string().nonempty('city is required'),
    phone: zod.string().nonempty('Phone is required').regex(/^01[0125][0-9]{8}$/, "enter a valid number"),
    details: zod.string().nonempty('shipping address is required'),

  })
