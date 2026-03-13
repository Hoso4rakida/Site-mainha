function RodaPe() {
  return (
    <section className="bg-stone-950 text-white pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-stone-800">
          {/* Brand */}
          <div>
            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              arquiteta
            </p>
            <h3 className="text-xl font-bold mb-3">Cristiane Planejados</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Móveis planejados, arquitetura e design de interiores.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Serviços
            </p>
            <ul className="text-stone-400 text-sm space-y-2">
              <li>Móveis Planejados</li>
              <li>Arquitetura Residencial</li>
              <li>Design de Interiores</li>
              <li>Consultoria de Ambientes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Contato
            </p>
            <ul className="text-stone-400 text-sm space-y-2">
              <li>
                <a
                  href="https://wa.me/5511965290048"
                  className="hover:text-amber-500 transition-colors"
                >
                  WhatsApp: (11) 96529 - 0048
                </a>
              </li>
              <li>
                <a
                  href="mailto:crisarchit@gmail.com"
                  className="hover:text-amber-500 transition-colors"
                >
                  E-mail: contato@cristiane.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/arquiteta.cristianesilva/"
                  className="hover:text-amber-500 transition-colors"
                >
                  Instagram: @arquiteta.cristianesilva
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-stone-600 text-xs">
            © 2026 Christiane Planejados · Todos os direitos reservados
          </p>
          <p className="text-stone-700 text-xs">
            Desenvolvido por{" "}
            <a
              href="https://github.com/Hoso4rakida"
              className="text-stone-500 hover:text-amber-500 transition-colors"
            >
              Joe David
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RodaPe;
