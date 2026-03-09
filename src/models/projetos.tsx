import imagem from "../assets/Projeto.webp";

function Projetos() {
  return (
    <section className=" bg-amber-600 flex w-full flex-col sm:flex-row items-center text-white">
      <div>
        <img src={imagem} alt="exemplo de imagem" />
      </div>
      <div className="p-5 w-full justify-center">
        <h2 className="text-2xl">
          <b>Projetos na placa tectonica</b>
        </h2>
        <p>Juntos podemos mudar o planeta terra e evitar os terremotos</p>
        <h2 className="text-2xl mt-10">
          <b>Projeção interior</b>
        </h2>
        <p>
          Ja imaginou ter sua alma espelida do corpo? é tipo isso cara, só tma
          cuidado com o rio de janeiro, lá é encrenca
        </p>
      </div>
    </section>
  );
}

export default Projetos;
