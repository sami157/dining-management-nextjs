import { z } from 'zod'

export const loginZodSchema = z.object({
    email: z.email().min(1, 'Email address is required'),
    password: z.string().min(1, 'Password is required'),
})

export type ILoginPayload = z.infer<typeof loginZodSchema>