import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Img/logo.png';

function Header() {
  const location = useLocation();

  return (
    <div className={`flex justify-between items-center pr-4 bg-[#22303A] fixed top-0 w-full z-10 ${location.pathname !== '/' ? 'bg-opacity-90' : ''}`}>
      <div>
        <img src={Logo} className='h-16 w-18' alt="Logo" />
      </div>
      <div className='flex gap-6 text-[22px] font-sans font-bold text-white '>
        <a
          href="#home"
          className={`hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7] ${location.pathname === '/' ? 'text-[#48d0b7] border-b border-[#48d0b7]' : ''}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7] ${location.pathname === '/about' ? 'text-[#48d0b7] border-b border-[#48d0b7]' : ''}`}
        >
          About
        </a>
        <a
          href="#lenguaje"
          className={`hover:border-b hover:border-[#48d0b7] hover:text-[#48d0b7] ${location.pathname === '/lenguaje' ? 'text-[#48d0b7] border-b border-[#48d0b7]' : ''}`}
        >
          Lenguaje
        </a>
        <a
          href="#contenido"
          className={`hover:border-b hover.border-[#48d0b7] hover:text-[#48d0b7] ${location.pathname === '/contenido' ? 'text-[#48d0b7] border-b border-[#48d0b7]' : ''}`}
        >
          Contenido
        </a>
        <a
          href="#contacto"
          className={`hover:border-b hover.border-[#48d0b7] hover:text-[#48d0b7] ${location.pathname === '/contacto' ? 'text-[#48d0b7] border-b border-[#48d0b7]' : ''}`}
        >
          Contacto
        </a>
      </div>
    </div>
  );
}

export default Header;


