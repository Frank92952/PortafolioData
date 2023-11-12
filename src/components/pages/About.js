import React, { useState } from 'react';
import Frank from '../Img/frank.jpg';

function About() {
  const [activeSection, setActiveSection] = useState('acercaDeMi');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="flex flex-col bg-[#2b4150] h-[739px] pt-14 pl-10 pr-5">
        <h1 className='text-center text-[55px] font-extrabold text-white mb-4'>Sobre Mí</h1>
        <div className='flex gap-10 text-center '>
          <div className='w-6/12 flex justify-center'>
            <img className="h-[500px] w-[450px] rounded-xl border-2 border-[#48d0b7]" src={Frank} alt="Frank" />
          </div>
          <div className='w-6/12'>
            <div className='flex justify-center gap-8 text-[25px] text-white pb-4 '>
              <button className={`border-b-4 ${activeSection === 'acercaDeMi' ? 'border-[#48d0b7]' : 'border-transparent'}`} onClick={() => handleSectionChange('acercaDeMi')}>Acerca de Mí</button>
              <button className={`border-b-4 ${activeSection === 'habilidades' ? 'border-[#48d0b7]' : 'border-transparent'}`} onClick={() => handleSectionChange('habilidades')}>Habilidades</button>
            </div>

            {activeSection === 'acercaDeMi' && (
              <div className='flex flex-col gap-4 text-[22px] text-left ml-5'>
                <p className='text-[#48d0b7]'>Frank Caysahuana</p>
                <p className='text-justify text-white'>
                Soy un diseñador web apasionado por crear experiencias digitales únicas y efectivas para mis clientes. A lo largo de mi carrera Universitaria he adquirido una amplia experiencia en la creación de sitios web y aplicaciones web que no solo tienen un diseño atractivo, sino que también están optimizados para la experiencia del usuario y la conversión.
                        En este portfolio, encontrarás una selección de mis proyectos más recientes y destacados, en los que he trabajado con clientes de diferentes sectores y tamaños. Cada proyecto que presento aquí tiene su propia historia, desde la idea inicial hasta el lanzamiento final, y estoy orgulloso de haber sido parte de su éxito..
                </p>
              </div>
            )}

            {activeSection === 'habilidades' && (
              <div className='flex gap-20'>
                            <div className='flex flex-col ml-5 mt-10 gap-5 text-[20px] text-white'>
              <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Liderazgo</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Comunicación asertiva</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Resolución de problemas</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Elaboración de reportes</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Adaptabilidad</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Trabajo en equipo</p>
                
                </div>
              </div>
              <div className='flex flex-col ml-5 mt-10 gap-5 text-[20px] text-white'>
              <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Liderazgo</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Comunicación asertiva</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Resolución de problemas</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Elaboración de reportes</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Adaptabilidad</p>
                
                </div>
                <div className=' flex items-center gap-6  '>
                <div className="w-7 h-7 bg-[#48d0b7] rounded-full"></div>
                  
                  <p>Trabajo en equipo</p>
                
                </div>
              </div>
                </div>

    
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
