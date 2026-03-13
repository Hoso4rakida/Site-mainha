import "./App.css";
import About from "./models/about.tsx";
import Bar from "./models/bar.tsx";
import Baner from "./models/banner.tsx";
import Carrosel from "./models/carrosel.tsx";
import Projetos from "./models/projetos.tsx";
import RodaPe from "./models/rodape.tsx";

const arquivos = import.meta.glob('./assets/carrosel/*', { eager: true });
const listImages = Object.values(arquivos).map((modulo: any) => modulo.default);




function App() {
  return (
    <div className="bg-stone-900">
      <Bar />
      <div className="h-18">{/*Espaçamento*/}</div>
      <Baner />
      <Projetos/>
      
      <section>
        <h2 className="text-2xl text-center p-3 text-white" id="Projetos">
          <b>Projetos feito por Christiane</b>
        </h2>
        <Carrosel imagem={listImages} right={false} />
        <Carrosel imagem={listImages} right={true} />
      </section>
      <About />
      <RodaPe />
    </div>
  );
}

export default App;
