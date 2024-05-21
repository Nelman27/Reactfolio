import React from "react";
import skills from "../Info/skills";

function Skills() {
  return (
    <div className="object-center">
      <h1 className="mt-3 font-sans text-3xl font-bold text-left2">Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <div className="mt-2 bg-blue-700 inline-block m-2 border-2 border-black rounded-lg object-center">
            <li key={index} className="mt-1 ml-1 mr-1 mb-1 text-base text-white text-center font-bold ">
            {skill}
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
