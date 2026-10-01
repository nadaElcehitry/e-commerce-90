import * as zod from 'zod'
export const loginSchema = zod.object({
    email: zod.string().nonempty('Email is required').email({ message: 'Please enter a valid email address.' }),
    password: zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/, 'Password must be at least 5 characters, including uppercase, lowercase, number, and special character'),
  })
