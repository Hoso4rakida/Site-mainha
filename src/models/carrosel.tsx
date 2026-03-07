interface imagens{ 
  imagem: string[];
}

function Carrosel({imagem}:imagens) {
  
  return (
    <section>
      <div className="overflow-x-hidden bg-slate-50 py-3">
        <div className="animate-marquee">
          {/*Marquee e carrosel */}
          <div className="flex gap-4 px-2">
            {imagem.map((img, IdKey) => (
              <img
                key={IdKey}
                src={img}
                className="h-32 w-40 sm:h-48 sm:w-60 md:h-60 md:w-80 lg:h-75 lg:w-125 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>

          {/* scroll secundario */}
          <div className="flex gap-4 px-2">
            {imagem.map((img, IdKey) => (
              <img
                key={`copy-${IdKey}`}
                src={img}
                className="h-32 w-40 sm:h-48 sm:w-60 md:h-60 md:w-80 lg:h-75 lg:w-125 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrosel;
