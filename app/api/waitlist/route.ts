import { NextResponse } from 'next/server';

// Simple mock handler that echoes back a friendly confirmation message.
export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const name = typeof payload.name === 'string' && payload.name.trim().length > 0 ? payload.name.trim() : 'friend';
  const audience = typeof payload.audience === 'string' && payload.audience.length > 0 ? payload.audience : 'your loved one';

  return NextResponse.json(
    {
      message: `Thanks, ${name}! We are saving your spot for ${audience} and will share a quiet invite soon.`,
    },
    { status: 201 }
  );
}
