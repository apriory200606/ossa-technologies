import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  console.log(process.env.TELEGRAM_BOT_TOKEN)
  console.log(process.env.TELEGRAM_CHAT_ID)
  try {
    const body = await req.json()

    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields required' },
        { status: 400 }
      )
    }

    const text = `
🚀 NEW REQUEST

👤 Name: ${name}
📧 Email: ${email}

📝 Message:
${message}
`

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`

    await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }),
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}