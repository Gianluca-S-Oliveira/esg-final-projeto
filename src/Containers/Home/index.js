import React,
{
  useState
}

  from "react";
import helloIgh from "../../images/hello.jpg";
import "./home.scss";
import Header from "../Header/Header";

import {
  FaFish
}

  from "react-icons/fa";

import {
  BiBookReader
}

  from "react-icons/bi";

import {
  FaHandPaper
}

  from "react-icons/fa";

import {
  BsFillTreeFill
}

  from "react-icons/bs";

import {
  SlEnergy
}

  from "react-icons/sl";

import {
  FaUserCircle
}

  from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imagem2 from "../../images/perrfil2.PNG";
import imagem3 from '../../images/perfil3.PNG';
import imagem from '../../images/perfil1.jpg';

const Home = () => {

  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1900,
    autoplaySpeed: 1500,
  }

    ;

  return (<>
    <Header />

    <br />
    <br />
    <div className="container"> <h2> Transforme Ações em impacto ! Adote práticas da ESG+ e seja recompensado em nossa empresa ! </h2> <div className="card-container"> <div className="card"> <BsFillTreeFill size={
      70
    }

      color="white" className="icone" /> <p>Reflorestamento</p> </div> <div className="card"> <FaHandPaper size={
        70
      }

        color="white" className="icone" /> <p>Voluntariado</p> </div> <div className="card"> <BiBookReader size={
          70
        }

          color="white" className="icone" /> <p>Educação</p> </div> <div className="card"> <SlEnergy size={
            70
          }

            color="white" className="icone" /> <p>Economia Inteligente de Energia</p> </div> </div> <h3> Destaques de funcionários recentes </h3> <Slider {
              ...settings
            }

              className="slider"> <div className="destaque"> <div className="infos"> <img src={
                imagem2
              }

                alt='' className="foto_destaque" /> <p><span> Henrique</span> contribuiu <span> 100 vezes</span> com conservação na ultima semana !</p> </div> <div></div> </div> <div className="destaque"> <div className="infos"> <img src={
                  imagem3
                }

                  alt='' className="foto_destaque" /> <p><span> Luciana</span> contribuiu <span> 50 vezes</span> com conservação na ultima semana !</p> </div> </div> <div className="destaque"> <div className="infos"> <img src={
                    imagem
                  }

                    alt='' className="foto_destaque" /> <p><span> Marcia</span> contribuiu <span> 20 vezes</span> com reciclagem na ultima semana !</p> </div> </div> </Slider> </div> <div id="#" className="containerHome"> <h1> <span>Olá !</span> Já praticou sua atividade sustentável hoje? </h1> <div className="conntainerImg"> {
                      " "
                    }

                      <img src={
                        helloIgh
                      }

                      /> </div> <div className="submit"> <h2>Não?? Então vamos lá !</h2> <a href="/form">Registrar Atividade </a> </div> </div> </>);
}

  ;

export default Home;