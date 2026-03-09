import "./App.css";
import About from "./models/about.tsx";
import Bar from "./models/bar.tsx";
import Baner from "./models/banner.tsx";
import Carrosel from "./models/carrosel.tsx";
import Projetos from "./models/projetos.tsx";
import Feedbacks from "./models/feedbacks.tsx";
import RodaPe from "./models/rodape.tsx";

import img1 from "./assets/carrosel/b-012.jpg";
import img2 from "./assets/carrosel/Heracles_-_Greek.jpg"
import img3 from "./assets/carrosel/cat_and_crow.jpg"
import img4 from "./assets/carrosel/flower.jpg"

import img5 from "./assets/carrosel/frieren.jpeg"
import img6 from "./assets/carrosel/cloud_sky2.jpg"
import img7 from "./assets/carrosel/frieren3.jpg"
import img8 from "./assets/carrosel/G_wO9c2XMAAnrUd.jpeg"

const imagens = [
  img1,
  img2,
  img3,
  img4
]

const imagens2 = [
  img5,
  img6,
  img7,
  img8
]

function App() {
  return (
    <>
      <Bar />
      <div className="h-18">{/*Espaçamento*/}</div>
      <Baner />
      <Projetos/>
      
      <section>
        <h2 className="text-2xl text-center p-3">
          <b>Projetos feito por cristiane</b>
        </h2>
        <Carrosel imagem={imagens} />
        <Carrosel imagem={imagens2} />
      </section>
      <About />
      <Feedbacks />
      <RodaPe />
    </>
  );
}

export default App;
