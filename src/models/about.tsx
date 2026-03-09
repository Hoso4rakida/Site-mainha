import profile from "../assets/profile.webp";
import "../App.css";

function About() {
  return (
    <section className="text-white">
      <div className="flex flex-col sm:flex-row items-center bg-amber-600">
        <div className="rounded-md justify-center sm:justify-between m-5">
          <img
            src={profile}
            alt="Foto de cristiane shadow-md"
            className="w-md rounded-full"
          />
        </div>
        <div className="pb-5 w-full">
          <h1 className="text-3xl text-center">
            <b>Cristiane Planejados</b>
          </h1>
          <p className="text-center p-5">
            <q className="italic text-lg">
              Ninguem pode entrar duas vezes no mesmo río, poís quando nele se
              entra novamente, não se encontra as mesmas águas, e o prórpio ser
              já se modificou
            </q>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
