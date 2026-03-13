//in felizmente, usei IA nessa parte, 15% do trabalho foi feito por IA
import BannerImg from "../assets/Banner.webp";

function Baner() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-stone-900">

        <div className="order-1 md:col-start-1 md:row-start-1 flex flex-col justify-center pt-8 pb-8">
          <div className="text-center p-5">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Móveis · Arquitetura · Interiores
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ambientes que revelam quem você é
            </h1>
            <p className="mt-5 text-stone-300 max-w-md mx-auto text-lg leading-relaxed">
              Cada projeto nasce de uma escuta cuidadosa. Transformamos espaços em experiências únicas — com design, propósito e elegância.
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <a href="#Projetos">
              <button className="border-amber-500 border-2 w-48 h-14 font-semibold text-amber-500 hover:bg-stone-800 transition-colors tracking-wide">
                Ver Projetos
              </button>
            </a>

            <a href="https://wa.me/5511965290048" target="_blank">
              <button className="bg-amber-600 text-white w-48 h-14 font-semibold hover:bg-amber-700 transition-colors tracking-wide">
                Fale Comigo
              </button>
            </a>
          </div>
        </div>

        <div className="order-2 md:col-start-2 md:row-span-2">
          <img
            src={BannerImg}
            alt="Projeto assinado por Cristiane"
            className="w-full h-96 md:h-full object-cover"
          />
        </div>

        <div className="order-3 md:col-start-1 md:row-start-2 self-end border-t-2 border-amber-600 p-5">
          <p className="text-stone-400 text-sm tracking-widest uppercase text-center">
            Mais de <span className="text-amber-500 font-semibold">15 anos</span> transformando espaços em lares extraordinários
          </p>
        </div>

      </div>
    </section>
  );
}

export default Baner;