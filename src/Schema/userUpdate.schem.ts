import * as zod from 'zod'

export const updateUserSchema = zod.object({
    name: zod.string().nonempty('Name is required').min(3, 'Name should be more than 2 characters').max(10, 'Name should be less than 10 characters'),
    email: zod.string().nonempty('Email is required').email({ message: 'Please enter a valid email address.' }),
    phone: zod.string().nonempty('Phone is required').regex(/^01[0125][0-9]{8}$/, "enter a valid number"),
   
  })

