import pro1 from '../images/pro1.jpg';

const projects = [
  {
    id: 1,
    nombre: "Task List simple",
    imagen: pro1,
    web: {github:'https://github.com/Nelman27/react-task-practice',website:'https://nelman27.github.io/react-task-practice/'},
    descripcion:"Website simple creada con React,tailwindcss y vite que añade y elimina tareas.",
  },
  {
    id: 2,
    nombre: "Password generator",
    imagen: '',
    web: {github:'https://github.com/Nelman27/Generator',website:'En producción.'},
    descripcion: "Website simple con Django,React,Python,Vite y tailwinds que genera contraseñas .",
  },
];

export default projects;
