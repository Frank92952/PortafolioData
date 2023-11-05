import React, { useState, useEffect } from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import Frank from "../Img/frank.jpg";
import About from "./About";
import Header from "../header";
function Home() {
  const initialText = "DESARROLLADOR WEB FRONT-END";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const textArray = initialText.split("");

    const typeText = async () => {
      for (let i = 0; isMounted && i <= textArray.length; i++) {
        setDisplayedText(textArray.slice(0, i).join(""));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (isMounted) {
        eraseText();
      }
    };

    const eraseText = async () => {
      for (let i = textArray.length; isMounted && i >= 0; i--) {
        setDisplayedText(textArray.slice(0, i).join(""));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      if (isMounted) {
        typeText();
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [initialText]);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorBlinkInterval);
    };
  }, []);

  return (
    <>
          <Header />
          <div className="flex bg-[#2b4150] h-[675px] mt-[64px]">
            <div className="w-1/12 flex flex-col justify-between pb-8 pl-4 ">
              <div></div>
              <div className="flex flex-col gap-3 text-white">
                <a href="https://www.linkedin.com/in/frank-caysahuana-delao-720315254/">
                  <BsLinkedin className="h-6 w-6 hover:text-[#48d0b7]" />
                </a>
                <a href="https://github.com/Frank92952">
                  <BsGithub className="h-6 w-6 hover:text-[#48d0b7]" />
                </a>
                <a href="https://www.instagram.com/frankcaysahuana10/?hl=es">
                  <BsInstagram className="h-6 w-6 hover:text-[#48d0b7]" />
                </a>
                <a href="https://www.facebook.com/frank.caysahuanadelao.1/">
                  <BsFacebook className="h-6 w-6 hover:text-[#48d0b7]" />
                </a>
              </div>
            </div>
            <div className="w-10/12 pt-16 pb-20">
              <div className="flex gap-20 pl-5 pr-5 ">
                <div className="flex flex-col gap-4 ">
                  <div className="font-serif text-[#FFFFFF]">
                    <p className="  text-[35px] ">Hola! Soy</p>
                    <p className="  text-[55px] font-extrabold">
                      Frank Caysahuana
                    </p>
                  </div>

                  <div className="text-white font-sans text-3xl">
                    <p className="text-[22px] text-[#DDDEE2]">
                      {displayedText}
                      <span
                        className={
                          cursorVisible ? "visible-cursor" : "hidden-cursor"
                        }
                      >
                        |
                      </span>
                    </p>
                  </div>

                  <div className="text-[18px] text-white text-[#DDDEE2]">
                    <p>
                      Estudiante de Ingenieria de Sistemas enfocada al
                      Desarrollo Web Frontend. Aquí podrás conocer algunos de
                      mis proyectos más destacados y mi enfoque en crear
                      experiencias digitales únicas y memorables para los
                      usuarios.
                    </p>
                  </div>

                  <div className=" flex gap-6 text-[25px] mt-8">
                    <a href="#des">
                      <button className="rounded-xl border-2 pl-2 pr-2 border-[#48bed0] text-[#48bed0] hover:text-[#48bed0] hover:bg-white hover:border-[#48d0b7]">
                        Descargar CV
                      </button>
                    </a>
                    <a href="#contacto">
                      <button className="rounded-xl border-2 pl-2 pr-2 border-[#48d0b7] bg-[#48d0b7] text-white hover:border-[#48bed0] hover:text-[#48bed0] hover:bg-white">
                        Contacto
                      </button>
                    </a>
                  </div>
                </div>

                <div>
                  <img src={Frank} className="h-[480px] w-[950px]" />
                </div>
              </div>
            </div>
            <div className="w-1/12 "></div>
          </div>
    </>
  );
}

export default Home;
