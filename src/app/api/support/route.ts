import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL
    if (!backendUrl) {
      return NextResponse.json({ error: 'BACKEND_URL is not configured' }, { status: 500 })
    }

    const body = await req.json()
    const resp = await fetch(`${backendUrl}/support`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })

    const text = await resp.text()
    const isJson = resp.headers.get('content-type')?.includes('application/json')
    return new NextResponse(isJson ? text : JSON.stringify({ message: text }), {
      status: resp.status,
      headers: {
        'content-type': isJson ? 'application/json' : 'application/json',
      },
    })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Failed to submit support request' }, { status: 500 })
  }
}


