'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) router.push('/auth')
      else setUser(user)
      setLoading(false)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <p className="text-gray-500">Chargement...</p>
    </div>
  )

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">✦</span>
          </div>
          <span className="font-bold text-gray-900">EasyAdmin AI</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            Déconnexion
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Bonjour 👋
          </h1>
          <p className="text-gray-500">Que voulez-vous créer aujourd'hui ?</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-1">Documents générés</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-1">Temps économisé</p>
            <p className="text-2xl font-bold text-gray-900">0h</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-1">Crédits restants</p>
            <p className="text-2xl font-bold text-blue-600">10</p>
            <button
              onClick={async () => {
                const res = await fetch('/api/checkout', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email: user?.email })
                })
                const data = await res.json()
                window.location.href = data.url
              }}
              className="mt-4 w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-gray-800"
            >
              Passer au Premium - 9,90€/mois
            </button>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-4">Vos outils</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: "📄", title: "Devis", desc: "Générer un devis" },
            { emoji: "📧", title: "Email client", desc: "Répondre à un client" },
            { emoji: "📝", title: "Contrat", desc: "Contrat de prestation" },
            { emoji: "📱", title: "Post LinkedIn", desc: "Publication LinkedIn" },
            { emoji: "🔔", title: "Relance", desc: "Relance impayée" },
            { emoji: "📊", title: "CGV", desc: "Conditions générales" },
            { emoji: "🎯", title: "Instagram", desc: "Post Instagram" },
            { emoji: "💬", title: "Chat IA", desc: "Assistant IA" },
          ].map((tool, i) => (
            <a key={i} href="/dashboard/generateur" className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer block">
              <div className="text-2xl mb-2">{tool.emoji}</div>
              <p className="text-gray-900 font-semibold text-sm">{tool.title}</p>
              <p className="text-gray-400 text-xs mt-1">{tool.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}