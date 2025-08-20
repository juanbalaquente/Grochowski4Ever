export default function App() {
  return (
    <div className="flex h-screen bg-dark text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar p-4 border-r border-border flex flex-col">
        <h1 className="text-lg font-bold mb-6">🚀 MeuSite.link</h1>

        <p className="text-gray-400 text-sm mb-2 uppercase">Tópicos</p>
        <nav className="space-y-1 flex-1">
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition"
          >
            📚 <span>Livros</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition"
          >
            🎮 <span>Jogos</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition"
          >
            🎵 <span>Música</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition"
          >
            🎥 <span>Filmes e TV</span>
          </a>
        </nav>

        <div className="mt-6">
          <p className="text-gray-400 text-sm mb-2 uppercase">Recomendado</p>
          <a
            href="#"
            className="block px-3 py-2 rounded-lg hover:bg-card transition"
          >
            📌 Nomenclatura
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-lg hover:bg-card transition"
          >
            📖 Guias
          </a>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">➡️ Bem-vindo ao meu site</h2>

        {/* Card azul */}
        <div className="border border-accent rounded-lg p-4 mb-4 bg-card">
          <p className="text-accent font-semibold">ℹ️ Objetivo do site</p>
          <p>
            Este site funciona como um agregador de informações e links úteis.
          </p>
        </div>

        {/* Card verde */}
        <div className="border border-success rounded-lg p-4 bg-card">
          <p className="text-success font-semibold">✅ Antes de começar</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Use um navegador confiável</li>
            <li>Melhore seu DNS</li>
            <li>Considere usar uma VPN</li>
          </ul>
        </div>

        <div className="border border-accent rounded-xl p-5 mb-5 bg-card shadow-md">
          <h3 className="text-accent font-semibold flex items-center gap-2 mb-2">
            ℹ️ Qual o objetivo deste site?
          </h3>
          <p className="text-gray-300">
            Este site funciona como um agregador de informações e links úteis
            para a comunidade.
          </p>
        </div>

        <div className="border border-success rounded-xl p-5 bg-card shadow-md">
          <h3 className="text-success font-semibold flex items-center gap-2 mb-3">
            ⏳ Antes de começar
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Use um navegador confiável</li>
            <li>Melhore seu DNS</li>
            <li>Considere usar uma VPN</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
