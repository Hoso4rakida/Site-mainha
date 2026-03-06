import BannerImg from "../assets/Banner.jpg";

function Baner() {
  return (
    <section className="w-full">
      {/* Container Pai: Trocamos flex por grid!
          - grid-cols-1 no celular
          - grid-cols-2 no desktop
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
        
        {/* 1. Bloco de Texto (Título e Botões) */}
        {/* No desktop, fica na coluna 1, linha 1 */}
        <div className="order-1 md:col-start-1 md:row-start-1 flex flex-col justify-center pt-8 pb-8">
          <div className="text-center p-5">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              Arquitetura sob medida
            </h1>
            <p className="mt-4 text-slate-600 max-w-md mx-auto">
              Só há um caminho para a felicidade. Não nos preocuparmos com coisas que ultrapassam o poder da nossa vontade.
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-2">
            <button className="border-slate-600 border-4 w-48 h-14 font-bold text-slate-600 hover:bg-slate-100 transition-colors">
              Buttão
            </button>
            <button className="bg-slate-600 text-white w-48 h-14 font-bold hover:bg-slate-500 transition-colors">
              Botão
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

        {/* 3. Botão Saiba Mais */}
        {/* No desktop, fica na coluna 1, linha 2. 
            O self-end garante que ele fique encostado no final da div. */}
        <div className="order-3 md:col-start-1 md:row-start-2 self-end border-t-4 border-slate-600 p-4 bg-white">
          <h3 className="text-lg text-center text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:underline"><b>Saiba mais</b></a>
          </h3>
        </div>

      </div>
    </section>
  );
}

export default Baner;