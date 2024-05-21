import React from "react";
import projects from "../Info/projects.js";
import Projects from "./Projects.jsx";

function ViewProjects() {
  return (
    <div>
      <h1 className="mt-3 font-sans text-3xl font-bold text-left">Proyectos</h1>
      <p className="text-base mt-2 text-left">Esta sección se actualiza siempre estoy constantemente trabajando en proyectos que agrupen mis skills a modo de perferccionar mis conocimientos y habilidades lo invito a que visite mi github y cheque  mis repositorios.</p>
      <div className="mt-2">
      {projects.map((project) => (
        <Projects key={project.id} {...project} />
      ))}
      </div>
    </div>
  );
}

export default ViewProjects;
