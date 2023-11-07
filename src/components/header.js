import React, { useState } from 'react';
import Logo from './Img/logo.png';

function Header() {
  const [activeLink, setActiveLink] = useState('home'); // Inicialmente, establece "home" como activo

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-between items-center pr-4 bg-[#22303A] fixed top-0 w-full z-10">
      <div>
        <img src={Logo} className="h-16 w-18" alt="Logo" />
      </div>
      <div className="flex gap-6 text-[22px] font-sans font-bold text-white">
        <a
          href="#home"
          onClick={() => handleLinkClick('home')}
          className={`${
            activeLink === 'home'
              ? 'text-[#48d0b7] border-b border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handleLinkClick('about')}
          className={`${
            activeLink === 'about'
              ? 'text-[#48d0b7] border-b border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          About
        </a>
        <a
          href="#lenguaje"
          onClick={() => handleLinkClick('lenguaje')}
          className={`${
            activeLink === 'lenguaje'
              ? 'text-[#48d0b7] border-b border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          Lenguaje
        </a>
        <a
          href="#contenido"
          onClick={() => handleLinkClick('contenido')}
          className={`${
            activeLink === 'contenido'
              ? 'text-[#48d0b7] border-b border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          Contenido
        </a>
        <a
          href="#contacto"
          onClick={() => handleLinkClick('contacto')}
          className={`${
            activeLink === 'contacto'
              ? 'text-[#48d0b7] border-b border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          Contacto
        </a>
      </div>
    </div>
  );
}

export default Header;



