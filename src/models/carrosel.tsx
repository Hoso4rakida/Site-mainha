interface imagens{ 
  imagem: string[];
}

function Carrosel({imagem}:imagens) {
  
  return (
    <section>
      <div className="overflow bg-slate-50 py-3">
        <div className="animate-marquee">
          {/*Marquee e carrosel */}
          <div className="flex gap-4 px-2">
            {imagem.map((img, IdKey) => (
              <img
                key={IdKey}
                src={img}
                className="h-75 w-125 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>

          {/* scroll secundario */}
          <div className="flex gap-4 px-2">
            {imagem.map((img, IdKey) => (
              <img
                key={`copy-${IdKey}`}
                src={img}
                className="h-75 w-125 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrosel;
