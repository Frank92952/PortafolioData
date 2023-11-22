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
    <div id="footer" className="flex max-sm:justify-center  bg-[#2b4150] pt-8 pb-8 pr-5 pl-5 relative">
      <div className="flex flex-col justify-center  gap-6 left-0 w-1/12 max-sm:hidden  ">
        <div className="bolita w-10 h-10 bg-[#48d0b7] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-[#FFFF00] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-white rounded-full animate-bounce duration-500"></div>
      </div>
      <div className='flex flex-col text-center items-center gap-12 w-10/12 max-sm:gap-5'>
        <img src={IconoBlanco} className="w-28 h-28 max-sm:w-16 max-sm:h-16" />
        <div className="text-white text-serif font-bold text-[25px] max-sm:text-[12px]">
          <h1>Aprendo y creo todos los días.</h1>
          <h1>Creemos un proyecto juntos.</h1>
        </div>
  
        <div className="flex gap-10 text-white">
          <a href="https://www.linkedin.com/in/frank-caysahuana-delao-720315254/">
            <BsLinkedin className="ease-in-out ... max-sm:h-6 max-sm:w-6 h-12 w-12 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
          <a href="https://github.com/Frank92952">
            <BsGithub className="ease-in-out ... h-12 w-12 max-sm:h-6 max-sm:w-6 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
          <a href="https://www.instagram.com/frankcaysahuana10/?hl=es">
            <BsInstagram className="ease-in-out ... h-12 w-12 max-sm:h-6 max-sm:w-6 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
          <a href="https://www.facebook.com/frank.caysahuanadelao.1/">
            <BsFacebook className="ease-in-out ... h-12 w-12 max-sm:h-6 max-sm:w-6 hover:-translate-y-1 hover:scale-110 hover:text-[#48d0b7] duration-300" />
          </a>
        </div>
        <div>
          <span className="text-white font-bold max-sm:text-[12px]">Copyright © | Coded with Caysahuana Frank</span>
        </div>
      </div>
      <div className="flex flex-col justify-center xl:pl-[84px] max-lg:pl-[22px] pl-[55px] gap-6 left-0 w-1/12 max-sm:hidden  ">
        <div className="bolita w-10 h-10 bg-[#48d0b7] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-[#FFFF00] rounded-full animate-bounce duration-500"></div>
        <div className="bolita w-10 h-10 bg-white rounded-full animate-bounce duration-500"></div>
      </div>
    </div>
  );
}

export default Footer;

