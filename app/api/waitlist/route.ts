import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is missing')
}

const sql = neon(databaseUrl)

export async function POST(req: Request) {
  try {
    const { name, email, audience } = await req.json()

    console.log('BODY:', { name, email, audience })
    console.log('DATABASE_URL EXISTS:', !!process.env.DATABASE_URL)

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    await sql`
      INSERT INTO waitlist (name, email, audience)
      VALUES (${name ?? null}, ${email}, ${audience ?? null})
      ON CONFLICT (email) DO NOTHING
    `

    return NextResponse.json({
      success: true,
      message: 'Saved successfully',
    })
  } catch (error) {
    console.error('DB ERROR:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}