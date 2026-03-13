import { useState } from "react";

function Bar() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed z-50 w-full">
      {/* Topo informativo */}
      <div className="flex justify-between items-center w-full bg-amber-600 px-6 py-1">
        <p className="text-white text-xs tracking-widest uppercase">
          Christiane Planejados
        </p>
        <p className="text-white text-xs tracking-wide">
          WhatsApp: <a href="https://wa.me/5511965290048" className="underline hover:text-amber-100 transition-colors" target="_blank">(11) 96529-0048</a>
        </p>
      </div>

      {/* Navbar principal */}
      <div className="bg-stone-900 border-b border-stone-800 shadow-lg">
        <div className="flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-white text-lg font-bold tracking-wide leading-tight">
              Christiane
            </span>
            <span className="text-amber-500 text-xs uppercase tracking-[0.3em]">
              Planejados
            </span>
          </div>

          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="https://www.instagram.com/arquiteta.cristianesilva/" className="text-stone-300 hover:text-amber-500 transition-colors text-sm tracking-widest uppercase" target="_blank">
              Instagram
            </a>
            <a href="https://wa.me/5511965290048" className="text-stone-300 hover:text-amber-500 transition-colors text-sm tracking-widest uppercase" target="_blank">
              WhatsApp
            </a>
            <a href="malito:crisarchit@gmail.com" className="text-stone-300 hover:text-amber-500 transition-colors text-sm tracking-widest uppercase" target="_blank">
              Email
            </a>
          </nav>

          {/* Botão mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenu(!menu)}
            aria-label="Abrir menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menu ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Menu mobile */}
        <div className={`
          md:hidden transition-all duration-500 ease-in-out overflow-hidden
          ${menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <nav className="flex flex-col border-t border-stone-800">
            {["Início", "Projetos", "Sobre"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-stone-300 hover:text-amber-500 hover:bg-stone-800 transition-colors px-6 py-4 text-sm tracking-widest uppercase border-b border-stone-800"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/554002-8922"
              className="text-white bg-amber-600 hover:bg-amber-700 transition-colors px-6 py-4 text-sm tracking-widest uppercase text-center"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Bar;