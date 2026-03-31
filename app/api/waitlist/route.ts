import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

const sql = neon(process.env.DATABASE_URL!)

export async function POST(req: Request) {
  try {
    const { name, email, audience } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    await sql`
      INSERT INTO waitlist (name, email, audience)
      VALUES (${name}, ${email}, ${audience})
      ON CONFLICT (email) DO NOTHING
    `

    return NextResponse.json({ success: true, message: 'Saved successfully' })
  } catch (error) {
    console.error('DB ERROR:', error) // 👈 חשוב!
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}