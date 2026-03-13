import profile from "../assets/profile.webp";
import "../App.css";

function About() {
  return (
    <section className="text-white">
      <div className="flex flex-col sm:flex-row items-center bg-amber-600">
        <div className="rounded-md justify-center sm:justify-between m-5">
          <img
            src={profile}
            alt="Foto de Cristiane"
            className="w-md rounded-full shadow-xl"
          />
        </div>
        <div className="pb-5 w-full px-6">
          <p className="text-amber-100 uppercase tracking-[0.3em] text-xs font-semibold text-center mb-2">
            Sobre a profissional
          </p>
          <h1 className="text-3xl text-center font-bold mb-4">
            Cristiane — Arquitetura & Interiores
          </h1>
          <p className="text-center px-5 text-amber-50 leading-relaxed mb-5">
            Com mais de uma década de atuação, Cristiane alia sensibilidade estética e rigor técnico para criar ambientes que vão além da beleza — eles contam histórias, refletem personalidades e transformam a forma de viver.
          </p>
          <p className="text-center px-5">
            <q className="italic text-lg text-amber-100 leading-relaxed">
              Um espaço bem projetado não é apenas bonito — ele eleva o cotidiano, cria memórias e revela, em cada detalhe, a essência de quem o habita.
            </q>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;