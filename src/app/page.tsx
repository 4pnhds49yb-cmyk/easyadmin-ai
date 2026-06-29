export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* Nav */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">✦</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">EasyAdmin AI</span>
        </div>
        <div className="flex gap-3">
          <a href="#" className="text-sm text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-100">Connexion</a>
          <a href="#" className="text-sm bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700">Essayer gratuitement</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-1 mb-6">
          <span className="text-blue-700 text-xs font-bold tracking-wide">✦ IA POUR LES PROS</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Gagnez plusieurs heures<br />par semaine grâce à l'IA
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          Devis, factures, emails, marketing — générez tous vos documents professionnels en quelques secondes.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">
            Essayer gratuitement →
          </a>
          <a href="#" className="bg-white text-gray-800 font-semibold border-2 border-gray-200 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors">
            Voir les fonctionnalités
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <span className="text-sm text-gray-600 flex items-center gap-1">✅ 10 générations gratuites</span>
          <span className="text-sm text-gray-600 flex items-center gap-1">✅ Sans carte bancaire</span>
          <span className="text-sm text-gray-600 flex items-center gap-1">✅ Prêt en 30 secondes</span>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm tracking-widest mb-2">COMMENT ÇA MARCHE</p>
          <h2 className="text-3xl font-bold text-gray-900">3 étapes, résultat immédiat</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl">📋</span>
            </div>
            <p className="text-blue-600 font-bold text-xs tracking-wide mb-2">ÉTAPE 1</p>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Choisissez un outil</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Devis, email, post réseaux sociaux... plus de 20 générateurs disponibles.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl">✏️</span>
            </div>
            <p className="text-blue-600 font-bold text-xs tracking-wide mb-2">ÉTAPE 2</p>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Remplissez le formulaire</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Quelques informations clés — notre IA fait le reste en quelques secondes.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl">⬇️</span>
            </div>
            <p className="text-blue-600 font-bold text-xs tracking-wide mb-2">ÉTAPE 3</p>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Téléchargez ou copiez</h3>
            <p className="text-gray-600 text-sm leading-relaxed">PDF, Word, ou copie directe. Votre document est prêt à envoyer.</p>
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-bold text-sm tracking-widest mb-2">LES OUTILS</p>
            <h2 className="text-3xl font-bold text-gray-900">Tout ce dont vous avez besoin</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "📄", title: "Devis", desc: "Professionnel en 30s" },
              { emoji: "📧", title: "Emails", desc: "Clients & relances" },
              { emoji: "📱", title: "Réseaux sociaux", desc: "Facebook, Instagram, LinkedIn" },
              { emoji: "📝", title: "Contrats", desc: "CGV, prestations" },
              { emoji: "🎯", title: "Marketing", desc: "Fiches produit, newsletters" },
              { emoji: "✅", title: "Gestion", desc: "Planning, to-do, comptes rendus" },
              { emoji: "💬", title: "Chat IA", desc: "Assistant 24h/24" },
              { emoji: "📊", title: "Documents", desc: "Lettres, CGU, admin" },
            ].map((tool, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-4 text-center hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">{tool.emoji}</div>
                <p className="text-gray-900 font-semibold text-sm">{tool.title}</p>
                <p className="text-gray-500 text-xs mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm tracking-widest mb-2">TARIFS</p>
          <h2 className="text-3xl font-bold text-gray-900">Simple et transparent</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-gray-900 font-bold text-lg mb-2">Gratuit</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900">0€</span>
              <span className="text-gray-500">/mois</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> 10 générations / mois</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Tous les outils</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Export PDF</li>
              <li className="flex items-center gap-2 text-sm text-gray-400"><span className="text-gray-300 font-bold">✗</span> Historique illimité</li>
              <li className="flex items-center gap-2 text-sm text-gray-400"><span className="text-gray-300 font-bold">✗</span> Chat IA illimité</li>
            </ul>
            <a href="#" className="block text-center bg-gray-100 text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors">Commencer gratuitement</a>
          </div>
          <div className="bg-gray-900 border-2 border-gray-900 rounded-2xl p-8 relative">
            <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</div>
            <h3 className="text-white font-bold text-lg mb-2">Premium</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">9,90€</span>
              <span className="text-gray-400">/mois</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-200"><span className="text-green-400 font-bold">✓</span> Générations illimitées</li>
              <li className="flex items-center gap-2 text-sm text-gray-200"><span className="text-green-400 font-bold">✓</span> Tous les outils</li>
              <li className="flex items-center gap-2 text-sm text-gray-200"><span className="text-green-400 font-bold">✓</span> Export PDF & Word</li>
              <li className="flex items-center gap-2 text-sm text-gray-200"><span className="text-green-400 font-bold">✓</span> Historique illimité</li>
              <li className="flex items-center gap-2 text-sm text-gray-200"><span className="text-green-400 font-bold">✓</span> Chat IA illimité</li>
            </ul>
            <a href="#" className="block text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors">Passer au Premium</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">✦</span>
          </div>
          <span className="text-white font-bold">EasyAdmin AI</span>
        </div>
        <p className="text-sm mb-4">Gagnez du temps grâce à l'intelligence artificielle</p>
        <div className="flex justify-center gap-6 text-sm flex-wrap">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white transition-colors">CGU</a>
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs mt-6 text-gray-600">© 2024 EasyAdmin AI — Tous droits réservés</p>
      </footer>

    </main>
  )
}