import imagem from "../assets/Projeto.webp";

const servicos = [
  {
    numero: "01",
    titulo: "Móveis Planejados",
    descricao:
      "Cada peça projetada com precisão milimétrica para o seu espaço. Unimos funcionalidade, estética e materiais de alto padrão para criar ambientes que expressam personalidade — da cozinha ao quarto.",
  },
  {
    numero: "02",
    titulo: "Arquitetura Residencial",
    descricao:
      "Do esboço à entrega, desenvolvemos projetos arquitetônicos que respeitam o terreno, a luz natural e o modo de vida de cada cliente. Cada construção é única, porque cada família é única.",
  },
  {
    numero: "03",
    titulo: "Design de Interiores",
    descricao:
      "Harmonia entre formas, cores e texturas. Criamos ambientes que encantam à primeira vista e se revelam ainda mais especiais com o tempo — detalhes que transformam uma casa em lar.",
  },
];

function Projetos() {
  return (
    <section className="bg-stone-900 w-full">

      {/* Imagem + intro */}
      <div className="flex w-full flex-col sm:flex-row items-stretch">
        <div className="sm:w-1/2">
          <img
            src={imagem}
            alt="Projeto assinado por Cristiane"
            className="w-full h-72 sm:h-full object-cover"
          />
        </div>
        <div className="sm:w-1/2 bg-amber-600 flex flex-col justify-center p-10">
          <p className="text-amber-100 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            O que faço
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-5">
            Soluções completas para o seu espaço
          </h2>
          <p className="text-amber-50 leading-relaxed text-base">
            Atendemos desde o projeto até a execução — com rigor técnico, sensibilidade estética e total comprometimento com a sua visão. Você sonha, nós realizamos.
          </p>
          <div className="mt-8">
          </div>
        </div>
      </div>

      {/* Cards de serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-stone-800">
        {servicos.map((s) => (
          <div
            key={s.numero}
            className="p-8 border-b sm:border-b-0 sm:border-r border-stone-800 last:border-r-0 hover:bg-stone-800 transition-colors group"
          >
            <span className="text-amber-500 text-4xl font-bold opacity-40 group-hover:opacity-70 transition-opacity">
              {s.numero}
            </span>
            <h3 className="text-white text-xl font-bold mt-3 mb-3">
              {s.titulo}
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              {s.descricao}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projetos;