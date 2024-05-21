import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegCalendarDays } from "react-icons/fa6";
import Contact from "./contact/Contact.jsx";

function Eslogan() {
  return (
    <div className="flex flex-row leading-4">
      <div className="text-left">
        <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-4xl  font-sans font-extrabold  dark:text-black text-letf mt-2">
          Nelson Arrieta
        </h1>
        <p className="mt-2 mb-4 text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-sans font-bold text-black-500 dark:text-black-400 text-letf ">
          Estudiante de Ingeniería en sistemas y programador Junior a tiempo
          parcial
        </p>
        <div className="mt-[-10px] leading-3">
          <div className="flex items-center ml-5 font-sans text-lg">
            <AiOutlineGlobal  className="inline-block  object-fit-cover  " />
            <span className="inline-block ml-2">Caracas, Venezuela</span>
            <div className="flex items-center ml-5 font-sans text-lg md:lg">
              <FaRegCalendarDays  className="inline-block  object-fit-cover " />
              <span className="inline-block ml-2 ">27/12/2002</span>
            </div>
          </div>
          <div>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eslogan;


