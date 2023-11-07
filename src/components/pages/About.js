import React from 'react'

function About() {
  return (
    <>
      <div className="flex flex-col bg-red-500 h-[739px] pt-20 ">
        <h1>Sobre Mí</h1>
        <div className='flex  text-center divide-x divide-x-revers '>
          <div className='w-4/12'>
            <h5>Acerca de Mí</h5>
            <p>Soy un diseñador web apasionado por crear experiencias digitales únicas y efectivas para mis clientes. A lo largo de mi carrera Universitaria he adquirido una amplia experiencia en la creación de sitios web y aplicaciones web que no solo tienen un diseño atractivo, sino que también están optimizados para la experiencia del usuario y la conversión.
                        En este portfolio, encontrarás una selección de mis proyectos más recientes y destacados, en los que he trabajado con clientes de diferentes sectores y tamaños. Cada proyecto que presento aquí tiene su propia historia, desde la idea inicial hasta el lanzamiento final, y estoy orgulloso de haber sido parte de su éxito..</p>
          </div>
          <div className='w-4/12'>
            <h5>Conocimiento</h5>
          </div>
          <div className='w-4/12'>
          <h5>Habilidades</h5>
          </div>
        </div>
      </div>
      </>
  )
}

export default About