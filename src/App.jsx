import Eslogan from "./components/Eslogan.jsx";
import About_me from "./components/About_me.jsx";
import Imagen from "./components/Imagen.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import ViewProjects from "./components/ViewProjects.jsx";

function App() {
  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div className="p-16 w-full mx-auto">
        <div className="flex flex-row justify-content-between">
          <Eslogan className="ml-5 inline-block" />
          <Imagen className="inline-block" />
        </div>
        <About_me />
        <Experience />
        <Education />
        <Skills />
        <ViewProjects />
      </div>
    </div>
  );
}

export default App;
