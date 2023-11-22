import React, { useState } from 'react';
import Logo from './Img/logo.png';
import { HiMenu } from "react-icons/hi";

function Header(props) {
  const { showMenu } = props;
  const [activeLink, setActiveLink] = useState('home');
  const [menuActive, setMenuActive] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // No cierra el menú al hacer clic en un enlace
  };

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="flex justify-between items-center pr-4 bg-[#22303A] fixed top-0 w-full z-10">
      <img src={Logo} className="h-16 w-18" alt="Logo" />
      
      <HiMenu className='hidden max-lg:block h-12 w-12 text-white  ' onClick={handleMenuClick} />

      {menuActive && (
        <div className='bg-[#2b4150] w-[50%] text-[35px]  text-center  absolute top-16 right-0 gap-5 z-10 flex flex-col'>
            <a
          href="#home"
          onClick={() => handleLinkClick('home')}
          className={`${
            activeLink === 'home'
              ? 'text-[#48d0b7] bg-white border-b-4 border-[#48d0b7]'
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
              ? 'text-[#48d0b7] bg-white border-b-4 border-[#48d0b7]'
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
              ? 'text-[#48d0b7] bg-white border-b-4 border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          Lenguaje
        </a>
        <a
          href="#contacto"
          onClick={() => handleLinkClick('contacto')}
          className={`${
            activeLink === 'contacto'
              ? 'text-[#48d0b7] bg-white border-b-4 border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          Contacto
        </a>
        </div>
             
        )}
    
      <div className="max-lg:hidden max-sm:hidden flex gap-6 text-[22px] font-sans font-bold text-white">
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
        {/* <a
          href="#contenido"
          onClick={() => handleLinkClick('contenido')}
          className={`${
            activeLink === 'contenido'
              ? 'text-[#48d0b7] border-b border-[#48d0b7]'
              : 'text-white hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7]'
          }`}
        >
          Contenido
        </a> */}
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



