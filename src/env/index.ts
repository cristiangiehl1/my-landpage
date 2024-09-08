import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXT_PORT: z.coerce.number().default(3000),
  NEXT_INSTAGRAM_URL: z.string().url(),
  NEXT_LINKEDIN_URL: z.string().url(),
  NEXT_CONTACT_NUMBER: z.string(),
  NEXT_CONTACT_EMAIL: z.string().email(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error(
    '❌ Invalid environment variables! ❌',
    JSON.stringify(_env.error.format(), null, 2),
  )

  throw new Error('❌ Invalid environment variables! ❌')
}

export const env = _env.data
