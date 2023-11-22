import React, { useState, useEffect } from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import Frank from "../Img/frank.jpg";
import About from "./About";
import Header from "../header";
import CV_PDF from "./Cv-CaysahuanaDelaoFrankJhon.pdf"
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

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV_PDF; // Utiliza la variable importada para la ruta del PDF
    link.download = 'Frank_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
            <Header />
          <div className="flex  max-lg:items-center max-lg:flex-col  bg-[#2b4150] h-[739px] max-lg:h-[669px] max-sm:h-[704px] ">
            <div>
            <img src={Frank} className="max-lg:mt-20 hidden max-lg:block rounded-xl border-2 border-[#48d0b7] h-[350px] " />
            </div>
            <div className="max-lg:hidden w-1/12 flex flex-col justify-between pb-8 pl-4  ">
              <div className=""></div>
              <div className="flex flex-col gap-3 text-white  ">
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
            <div className="w-11/12  pt-36 max-lg:pt-[20px] pb-20 ">
              <div className="flex max-lg:flex-col max-lg:items-center max-lg:text-center  xl:gap-28 gap-4 pl-5 pr-5 ">
                <div className="flex flex-col gap-4  ">
                  <div className="font-serif text-[#FFFFFF]  max-lg:gap-2 max-lg:flex max-lg:items-center max-sm:flex-col">
                    <p className="  text-[35px] max-lg:text-[25px]  ">Hola! Soy</p>
                    <p className="  text-[55px] max-lg:text-[35px] max-sm:text-[30px] max-lg:text-[#48d0b7] font-extrabold">
                      Frank Caysahuana
                    </p>
                  </div>

                  <div className="text-white font-sans text-3xl">
                    <p className="text-[22px] max-sm:text-[18px] text-[#DDDEE2]">
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

                  <div className="max-lg:hidden text-[18px] text-white text-[#DDDEE2]">
                    <p>
                      Estudiante de Ingenieria de Sistemas enfocada al
                      Desarrollo Web Frontend. Aquí podrás conocer algunos de
                      mis proyectos más destacados y mi enfoque en crear
                      experiencias digitales únicas y memorables para los
                      usuarios.
                    </p>
                  </div>

                  <div className=" flex  gap-6 text-[25px] mt-8 max-lg:mt-2">
                    <a href="#des">
                      <button className="max-lg:ml-36 transition ease-in-out delay-150 max-lg:bg-[#48d0b7]  max-sm:ml-[62px] text-white rounded-xl border-2 pl-2 pr-2 border-[#48d0b7]  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#48bed0] duration-300 ..."
                       onClick={handleDownloadCV}>
                        Descargar CV
                      </button>
                    </a>
                    <a href="#contacto">
                      <button className="max-lg:hidden transition ease-in-out delay-150 bg-[#48d0b7]  text-white rounded-xl border-2 pl-2 pr-2 border-[#48d0b7]  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#48bed0] duration-300 ...">
                        Contacto
                      </button>
                    </a>
                  </div>
                </div>

                <div >
                  <img src={Frank} className=" xl:h-[480px] xl:w-[950px] h-[450px] w-[950px] rounded-xl border-2 border-[#48d0b7] max-lg:hidden :hidden" />
                </div>
              </div>
            </div>
            <div className="hidden max-lg:block   text-white -mt-16  ">
              <div className="flex  gap-5 ">
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
          </div>
    </>
  );
}

export default Home;
