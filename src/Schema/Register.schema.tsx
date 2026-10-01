import * as zod from 'zod'

export const registerSchema = zod.object({
    name: zod.string().nonempty('Name is required').min(3, 'Name should be more than 2 characters').max(10, 'Name should be less than 10 characters'),
    email: zod.string().nonempty('Email is required').email({ message: 'Please enter a valid email address.' }),
    phone: zod.string().nonempty('Phone is required').regex(/^01[0125][0-9]{8}$/, "enter a valid number"),
    password: zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/, 'Password must be at least 5 characters, including uppercase, lowercase, number, and special character'),
    rePassword: zod.string().nonempty('Confirm password is required'),
  }).refine((data) => data.password == data.rePassword, {
    message: 'password and confirm password not matched',
    path: ['rePassword']
  })

