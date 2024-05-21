import React from "react";

function Projects({ nombre, descripcion, web, imagen }) {
  return (
    <div className="mt-2 w-64 h-auto border-2 border-black inline-block rounded-lg ml-3">
    <div className="mt-2 ml-2 mb-1 mr-2 inline-block">
        <h2 className="mt-3 text-2xl font-bold text-center">{nombre}</h2>
        <div className="flex justify-center">
          <img
            className=" flex items-center mt-2 mb-3 border-2 rounded-lg border-blue-700 w-32 h-32"
            src={imagen}
          ></img>
        </div>

        <p className=" wt-5 text-base text-center">{descripcion}</p>
        {web && (
          <div className=" wt-2 links">
            <a href={web.github} target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center">
                <button className="flex justify-center bg-blue-700 border-2 border-black mt-2 ml-2 mb-2 mr-2 rounded-lg">
                  <p className="mt-1 ml-1 mr-1 mb-1 text-white text-base text-center font-bold">
                    Código en Github
                  </p>
                </button>
              </div>
            </a>
            {web.website && (
              <a href={web.website} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center">
                  <button className="flex justify-center bg-blue-700 border-2 border-black mt-2 ml-2 mb-2 mr-2 rounded-lg">
                    <p className="mt-1 ml-1 mr-1 mb-1 text-white text-base text-center font-bold">
                      Website
                    </p>
                  </button>
                </div>
              </a>
            )}
          </div>
        )}
    </div>
    </div>
  );
}

export default Projects;
