import React, { useState } from 'react';
import JavaImage from "../Img/java.jpg";
import Php from "../Img/php.png";
import Css from "../Img/css.jpg";
import Js from "../Img/js.jpg";
import Sql from "../Img/sql.png";
import Tailwind from "../Img/tailwind.png";

function Lenguaje() {
  const initialCardsData = [
    {
      id: 1,
      image: JavaImage,
      text: "Durante mi formación académica, adquirí una sólida comprensión del lenguaje de programación Java y su aplicación en el desarrollo de aplicaciones de escritorio. A lo largo de mi carrera como estudiante de ingeniería de sistemas, me sumergí en el mundo de la programación orientada a objetos, lo que me permitió crear software bien estructurado y eficiente."
    },
    {
      id: 2,
      image: Php,
      text: "Durante mi tiempo como estudiante, tuve la oportunidad de adentrarme en el mundo de la programación web y aprender PHP, un lenguaje de programación ampliamente utilizado en el desarrollo de aplicaciones web dinámicas. A través de mis cursos y proyectos, adquirí un sólido conocimiento de PHP y sus aplicaciones prácticas."
    },
    {
      id: 3,
      image: Css,
      text: "Mí formación en CSS me ha proporcionado las habilidades necesarias para diseñar y desarrollar sitios web visualmente atractivos y funcionales, asegurándome de que sean compatibles con una variedad de dispositivos y navegadores. Estoy emocionado por seguir aprendiendo y aplicando estos conocimientos en proyectos reales para contribuir al mundo del desarrollo web."
    },
    {
      id: 4,
      image: Js,
      text: "Una de las lecciones más fundamentales que he adquirido es la importancia de los módulos y funciones en JavaScript. El lenguaje se basa en la creación de funciones y módulos reutilizables que representan diferentes partes de una aplicación web. Esta modularidad facilita la construcción de aplicaciones complejas al dividirlas en funciones más pequeñas y manejable."
    },
    {
      id: 5,
      image: Sql,
      text: "Lo más importantes que he aprendido es la capacidad de diseñar y crear bases de datos relacionales. Esto incluye la creación de tablas, definición de esquemas, y la asignación de relaciones entre las diferentes tablas. La normalización de bases de datos ha sido un concepto fundamental, y he comprendido cómo dividir la información en tablas relacionadas para mantener la integridad y eficiencia de los datos."
    },
    {
      id: 6,
      image: Tailwind,
      text: "Mi experiencia con Tailwind CSS me ha proporcionado las habilidades necesarias para crear interfaces de usuario modernas y atractivas de manera eficiente. Estoy emocionado por las oportunidades que se presentan en el mundo laboral y estoy seguro de que mi conocimiento será un activo valioso en mi carrera profesional, ya que esta biblioteca se ha convertido en una herramienta esencial en el desarrollo web actual."
    },
  ];

  const [cardsData, setCardsData] = useState(initialCardsData);

  const firstThreeCards = cardsData.slice(0, 3);
  const nextThreeCards = cardsData.slice(3, 6);

  return (
    <div className="flex flex-col bg-[#2b4150] h-[1060px] pt-14">
      <h1 className='text-center text-[55px] font-extrabold text-white'>HABILIDADES</h1>
      <div className='flex justify-center gap-16 mt-6'>
        {firstThreeCards.map((card) => (
          <div key={card.id} className="card ">
            <div className="card-front ">
              <img className='h-full w-full rounded-[20px] ' src={card.image} alt={`Card ${card.id}`} />
            </div>
            <div className="card-back">
              <p className='text-justify pl-3 pr-3'>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-16 mt-6'>
        {nextThreeCards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-front">
              <img className='h-full w-full rounded-[20px] ' src={card.image} alt={`Card ${card.id}`} />
            </div>
            <div className="card-back">
              <p className='text-justify pl-3 pr-3'>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lenguaje;



