'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Generateur() {
  const [type, setType] = useState('devis')
  const [client, setClient] = useState('')
  const [prestation, setPrestation] = useState('')
  const [details, setDetails] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const generate = async () => {
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data: { client, prestation, details } })
    })
    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => router.push('/dashboard')} className="text-gray-500 hover:text-gray-700">← Retour</button>
        <span className="font-bold text-gray-900">Générateur IA</span>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Créer un document</h1>

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Type de document</label>
              <select value={type} onChange={e => setType(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none">
                <option value="devis">Devis</option>
                <option value="email">Email client</option>
                <option value="linkedin">Post LinkedIn</option>
                <option value="contrat">Contrat</option>
<option value="relance">Relance impayée</option>
<option value="cgv">CGV</option>
<option value="instagram">Post Instagram</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Client / Destinataire</label>
              <input type="text" value={client} onChange={e => setClient(e.target.value)}
                placeholder="Ex: Dupont SARL"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Prestation / Sujet</label>
              <input type="text" value={prestation} onChange={e => setPrestation(e.target.value)}
                placeholder="Ex: Refonte site web"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Détails</label>
              <textarea value={details} onChange={e => setDetails(e.target.value)}
                placeholder="Informations supplémentaires..."
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none" />
            </div>
          </div>

          <button onClick={generate} disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50">
            {loading ? 'Génération en cours...' : '✦ Générer'}
          </button>

          {result && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Résultat</span>
                <button onClick={() => navigator.clipboard.writeText(result)}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                  Copier
                </button>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-800 whitespace-pre-wrap">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}