import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { type, data } = await req.json()

  const prompts: Record<string, string> = {
    devis: `Tu es un assistant professionnel. Génère un devis professionnel en français pour :
- Client : ${data.client}
- Prestation : ${data.prestation}
- Détails : ${data.details}
Le devis doit être professionnel, clair et inclure les mentions légales standard.`,

    email: `Tu es un assistant professionnel. Rédige un email professionnel en français pour :
- Destinataire : ${data.client}
- Sujet : ${data.prestation}
- Contexte : ${data.details}
L'email doit être courtois, professionnel et efficace.`,

    linkedin: `Tu es un expert en marketing. Rédige une publication LinkedIn engageante en français sur :
- Sujet : ${data.prestation}
- Contexte : ${data.details}
La publication doit être accrocheuse et professionnelle.`,
  }

  const prompt = prompts[type] || `Génère un document professionnel en français pour : ${data.prestation}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1000,
  })

  const result = completion.choices[0].message.content

  return NextResponse.json({ result })
}