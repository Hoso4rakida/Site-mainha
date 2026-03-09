//in felizmente, usei IA nessa parte, 15% do trabalho foi feito por IA
import BannerImg from "../assets/Banner.webp";

function Baner() {
  return (
    <section className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 bg-stone-900">
        
        <div className="order-1 md:col-start-1 md:row-start-1 flex flex-col justify-center pt-8 pb-8">
          <div className="text-center p-5">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Arquitetura sob medida
            </h1>
            <p className="mt-4 text-white max-w-md mx-auto">
              Só há um caminho para a felicidade. Não nos preocuparmos com coisas que ultrapassam o poder da nossa vontade.
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-2">
            <button className="border-amber-60 border-4 w-48 h-14 font-bold text-amber-600 hover:bg-stone-800 transition-colors">
              Projetos
            </button>
            <button className="bg-amber-600 text-white w-48 h-14 font-bold hover:bg-amber-700 transition-colors">
              Saiba mais
            </button>
          </div>
        </div>

        <div className="order-2 md:col-start-2 md:row-span-2">
          <img
            src={BannerImg}
            alt="Construção feita por Cristiane"
            className="w-full h-96 md:h-full object-cover"
          />
        </div>

        <div className="order-3 md:col-start-1 md:row-start-2 self-end border-4 border-amber-600 p-4">
          <h3 className="text-lg text-center text-amber-600 uppercase tracking-widest">
            <a href="#"><b>Saiba mais</b></a>
          </h3>
        </div>

      </div>
    </section>
  );
}

export default Baner;