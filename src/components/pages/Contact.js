import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Fondo from "../Img/Fondo_Portafolio.jpg";

function Contact() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    asunto: '',
    message: '',
  });

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleFocus = () => {
    setIsMouseOver(false);
  };

  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wlbj37g', 'template_ekh6wom', form.current, 'B-AcQCUPUQ5i63HG2')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
        setShowSuccessMessage(true);

        // Resetear los valores del formulario
        setFormData({
          user_name: '',
          user_email: '',
          asunto: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="relative">
      <img className="absolute h-full w-full " src={Fondo} alt="Fondo" />
      <div
        className="relative flex flex-col items-center h-[739px] pt-14"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-center text-[55px] font-extrabold text-white">
          CONTACTOS
        </h1>
        <div
          className={`flex flex-col gap-4 w-[650px] rounded-lg bg-blue-300 bg-opacity-20 p-6 border-t-4 border-[#FFFF00] ${
            isMouseOver ? "bounce-animation2" : ""
          }`}
        >
          {showSuccessMessage && (
            <p className="text-green-500 font-serif">El formulario se envió con éxito</p>
          )}
          {!isFormSubmitted && (
            <p className="text-white font-serif">
              Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.
            </p>
          )}
          <form className="flex flex-col gap-4 font-serif " ref={form} onSubmit={sendEmail}>
            <label htmlFor="text" className="font-bold text-[#FFFF00] ">
              Nombre
            </label>
            <input 
              type="text"
              placeholder="Ingresar Nombre"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className=" border-b-2 bg-transparent outline-none text-white placeholder:text-white  border-[#FFFF00]"
            />
            <label htmlFor="email" className="font-bold text-[#FFFF00] ">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="Ingresar Email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className=" border-b-2 bg-transparent outline-none text-white placeholder:text-white  border-[#FFFF00]"
            />
            <label htmlFor="text" className="font-bold text-[#FFFF00] ">
              Asunto
            </label>
            <input
              type="text"
              placeholder="Ingresar Asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className=" border-b-2 bg-transparent outline-none text-white placeholder:text-white  border-[#FFFF00]"
            />
            <label htmlFor="textarrea" className="font-bold text-[#FFFF00]">
              Mensaje
            </label>
            <textarea
              placeholder="Ingresar Mensaje"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className="h-32 border-2 rounded-lg pl-1 bg-transparent outline-none text-white placeholder:text-white  border-[#FFFF00]"
            />
            <div className="flex justify-center gap-4 mt-4 ml-1">
              <button
                className="transition ease-in-out delay-150 bg-[#FFFF00] rounded-md text-black  font-bold font-serif text-[20px] p-2  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#48bed0] duration-300 ..."
                onFocus={handleFocus}
                type='submit'
                value='Send'
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
