export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">✦</span>
          </div>
          <span className="font-bold text-gray-900">EasyAdmin AI</span>
        </div>
        <div className="flex gap-3">
          <a href="#" className="text-sm text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">Connexion</a>
          <a href="#" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Essayer gratuitement</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 mb-6">
          <span className="text-blue-600 text-xs font-semibold">✦ IA POUR LES PROS</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Gagnez plusieurs heures<br />par semaine grâce à l'IA
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
          Devis, factures, emails, marketing — générez tous vos documents professionnels en quelques secondes.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700">
            Essayer gratuitement →
          </a>
          <a href="#" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-medium hover:bg-gray-50">
            Voir les fonctionnalités
          </a>
        </div>
      </section>
    </main>
  )
}