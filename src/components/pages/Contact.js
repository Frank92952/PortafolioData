import React, { useState } from "react";
import Fondo from "../Img/Fondo_Portafolio.jpg";

function Contact() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleFocus = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="relative">
      <img className="absolute h-full w-full " src={Fondo} />
      <div
        className="relative flex flex-col items-center h-[739px] pt-14"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-center text-[55px] font-extrabold text-white">
          CONTACTOS
        </h1>
        <div
          className={`flex flex-col gap-4 rounded-lg bg-blue-300 bg-opacity-20 p-6 border-t-4 border-[#FFFF00] ${
            isMouseOver ? "bounce-animation2" : ""
          }`}
        >
        <p className="text-white font-serif">Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.</p>
        <form className="flex flex-col gap-4 font-serif ">
        <label htmlFor="text" className="font-bold text-[#FFFF00] ">
            Nombre
          </label>
          <input 
            type="text"
            placeholder="Ingresar Nombre"
            id="nombre"
            className=" border-b-2 bg-transparent outline-none text-white placeholder:text-white  border-[#FFFF00] "
            onFocus={handleFocus}
          />
          <label htmlFor="email" className="font-bold text-[#FFFF00] ">
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="Ingresar Email"
            id="email"
            className=" border-b-2 bg-transparent outline-none text-black placeholder:text-white  border-[#FFFF00] "
            onFocus={handleFocus}
          />
          <label htmlFor="text" className="font-bold text-[#FFFF00] ">
            Asunto
          </label>
          <input
            type="text"
            placeholder="Ingresar Asunto"
            id="asunto"
            className=" border-b-2 bg-transparent outline-none text-black placeholder:text-white  border-[#FFFF00] "
            onFocus={handleFocus}
          />
          <label htmlFor="textarrea" className="font-bold text-[#FFFF00]">
            Mensaje
          </label>
          <textarea
            placeholder="Ingresar Mensaje"
            id="mensaje"
            className="h-32 border-2 rounded-lg pl-1 bg-transparent outline-none text-white placeholder:text-white  border-[#FFFF00]"
            onFocus={handleFocus}
          />
          <div className="flex justify-center gap-4 mt-4 ml-1">
            <button className="transition ease-in-out delay-150 bg-[#FFFF00] rounded-md text-black  font-bold font-serif text-[20px] p-2  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#48bed0] duration-300 ..."
            onFocus={handleFocus}>
              Iniciar Sesión
            </button>

          </div>
        </form>
      </div>
    </div>
    </div>

  );
}

export default Contact;
