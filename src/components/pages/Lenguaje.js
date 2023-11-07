import React, { useState } from 'react';
import JavaImage from "../Img/java.jpg";
import Php from "../Img/php.png";
import Css from "../Img/css.jpg";
import Reac from "../Img/react.png";
import Sql from "../Img/sql.png";
import Tailwind from "../Img/tailwind.png"



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
      image: Reac,
      text: "Una de las principales lecciones que he aprendido es la importancia de los componentes en React. React se basa en la creación de componentes reutilizables que representan diferentes partes de una aplicación web. Esto facilita la construcción de interfaces de usuario complejas y dinámicas al dividirlas en componentes más pequeños y manejables."
    },
    {
      id: 5,
      image: Sql,
      text: "Lo más importantes que he aprendido es la capacidad de diseñar y crear bases de datos relacionales. Esto incluye la creación de tablas, definición de esquemas, y la asignación de relaciones entre las diferentes tablas. La normalización de bases de datos ha sido un concepto fundamental, y he comprendido cómo dividir la información en tablas relacionadas para mantener la integridad y eficiencia de los datos."
    },
    {
      id: 6,
      image: Tailwind,
      text: "Mi experiencia con Tailwind CSS me ha proporcionado las habilidades necesarias para crear interfaces de usuario modernas y atractivas de manera eficiente. Estoy emocionado por las oportunidades que se presentan en el mundo laboral y estoy seguro de que mi conocimiento  será un activo valioso en mi carrera profesional, ya que esta biblioteca se ha convertido en una herramienta esencial en el desarrollo web actual."
    },
    // Puedes agregar más tarjetas con contenido diferente aquí
  ];

  const [cardsData, setCardsData] = useState(initialCardsData);

  const handleFlip = (cardId) => {
    // Actualizar el estado de la tarjeta específica cuando se hace clic en ella
    setCardsData((prevCardsData) => {
      return prevCardsData.map((card) => {
        if (card.id === cardId) {
          return { ...card, isFlipped: !card.isFlipped };
        }
        return card;
      });
    });
  };

  const firstThreeCards = cardsData.slice(0, 3);
  const nextThreeCards = cardsData.slice(3, 6);

  return (
    <div className="flex flex-col bg-red-200 h-[1060px] pt-14">
      <h1 className='text-center text-[55px] font-extrabold text-white'>HABILIDADES</h1>
      <div className='flex justify-center gap-16 mt-6'>
        {firstThreeCards.map((card) => (
          <div key={card.id} className={`card ${card.isFlipped ? 'flipped' : ''}`} onClick={() => handleFlip(card.id)}>
            <div className="card-front">
              <p className='fixed text-2xl font-bold text-center text-[#48d0b7] animate-pulse mt-80'>CLICK</p>
              <img className='h-full w-full rounded-[20px] animate-pulse' src={card.image} alt={`Card ${card.id}`} />
            </div>
            <div className="card-back">
              <p className='text-justify pl-3 pr-3'>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-16 mt-6'>
        {nextThreeCards.map((card) => (
          <div key={card.id} className={`card ${card.isFlipped ? 'flipped' : ''}`} onClick={() => handleFlip(card.id)}>
            <div className="card-front">
              <p className='fixed text-2xl font-bold text-center text-[#48d0b7] animate-pulse mt-80'>CLICK</p>
              <img className='h-full w-full rounded-[20px] animate-pulse' src={card.image} alt={`Card ${card.id}`} />
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



