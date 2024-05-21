import React from "react";
import titles from "../Info/titles.js";

function Education() {
  return (
    <div className="mt-5">
      <h1 className="mt-3 font-sans text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-left">Educación</h1>
      <div>
        {titles.map((title) => (
          <div key={title.id}>
            <p className="mt-3 font-sans text-base font-bold text-left mr-4">{title.nombre}</p>
            <p className="mt-3 font-sans text-base font-bold text-left mr-4">{title.sede}</p>
            <p>{title.descripcion}</p>
            {title.web && (
              <a className="mt-2 font-sans font-bold text-base  text-center" href={title.web.url} target="_black">
              Ver certificado
              </a>              
            )}
          </div>
        ))}
      </div>
    </div>  
  );
}

export default Education;
