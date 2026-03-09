import { useState } from "react";

function Bar() {
    const[menu,setMenu] = useState(false);
    function mudarMenu(){
        setMenu(!menu)
    }

  return (
    <header className="fixed z-50">
      <div className="flex justify-between items-center w-full bg-white">
        <p className="pl-5">Moro logo ali</p>
        <p className="pr-5">meu numero: 4002-8922</p>
      </div>
      <div className="bg-stone-900 text-white shadow-lg" >
      <div className="flex justify-between bg-stone-800 p-5">
        <div>Cristiane planejado</div>
        <div>
          Contato
          <span 
          className="card p-3 m-2 bg-stone-600 border border-stone-500 cursor-pointer hover:bg-slate-700 rounded-md"
          onClick={mudarMenu}>
            {menu? "Fechar" : "Abrir"}
          </span>
        </div>
      </div>
        <div className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${menu ? "max-h-400 opacity-100 p-5" : "max-h-0 opacity-0 p-0"}
            `}>
            <ul className="item">
                <li className="pb-5"><a href="">texto dahora 😜</a></li>
                <li className="pb-5"><a href="">texto dahora 2 😎</a></li>
                <li className="pb-1"><a href="">Texto dahora 3 🥶</a></li>
            </ul>
        </div>
        </div>
    </header>
  );
}

export default Bar;
