import React, { useEffect } from 'react';
import IconoBlanco from './Img/icono-blanco.svg';
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

function Footer() {
  useEffect(() => {
    const bolitas = document.querySelectorAll('.bolita');
  
    window.addEventListener('scroll', () => {
      const footer = document.getElementById('footer');
  
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible =
          footerRect.top < window.innerHeight && footerRect.bottom >= 0;
  
        bolitas.forEach(bolita => {
          bolita.style.display = isFooterVisible ? 'block' : 'none';
        });
      }
    });
  }, []);

  return (
    <div id="footer" className="flex  bg-[#2b4150] pt-8 pb-8 pr-4 pl-4 relative">
      <div className="flex flex-col justify-center  gap-6 left-0 w-1/12  ">
        <div className="bolita w-10 h-10 bg-[#48d0b7] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-[#FFFF00] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-white rounded-full animate-bounce duration-500"></div>
      </div>
      <div className='flex flex-col items-center gap-12 w-10/12'>
        <img src={IconoBlanco} className="w-28 h-28" />
        <div className="text-white text-serif font-bold text-[25px]">
          <h1>Aprendo y creo todos los días.</h1>
          <h1>Creemos un proyecto juntos.</h1>
        </div>
  
        <div className="flex gap-10 text-white">
          <a href="https://www.linkedin.com/in/frank-caysahuana-delao-720315254/">
            <BsLinkedin className="ease-in-out ... h-12 w-12 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
          <a href="https://github.com/Frank92952">
            <BsGithub className="ease-in-out ... h-12 w-12 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
          <a href="https://www.instagram.com/frankcaysahuana10/?hl=es">
            <BsInstagram className="ease-in-out ... h-12 w-12 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
          <a href="https://www.facebook.com/frank.caysahuanadelao.1/">
            <BsFacebook className="ease-in-out ... h-12 w-12 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
        </div>
        <div>
          <span className="text-white font-bold">Copyright © | Coded with Caysahuana Frank</span>
        </div>
      </div>
      <div className="flex flex-col justify-center pl-[84px]  gap-6 left-0 w-1/12  ">
        <div className="bolita w-10 h-10 bg-[#48d0b7] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-[#FFFF00] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-white rounded-full animate-bounce duration-500"></div>
      </div>
    </div>
  );
}

export default Footer;

