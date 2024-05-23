import { TiWeatherSunny } from "react-icons/ti";
import { GiTreeBranch } from "react-icons/gi";
import { BiHappyBeaming } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import "./header.scss";
import logo from "../../images/logo.png";
import FormularioAtividade from "../Formulario/index";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pontos, setPontos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // <AiOutlineHome />; // Removido, não parece ser necessário aqui
  };

  function reloadPoints() {
    window.location.reload(true);
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <GiTreeBranch fontSize={40} /> LOGO
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            {" "}
            <AiOutlineHome fontSize={27} />
            <a href="/home"> Boas-Vindas</a>
          </li>
          <li>
            {" "}
            <BsPlusCircle fontSize={27} />
            <a href="form">Adicionar Tarefa</a>
          </li>
          <li>
            {" "}
            <AiOutlineUnorderedList fontSize={27} />
            <a href="atividades"> Listar Tarefas</a>
          </li>
          <li>
            {" "}
            <TiWeatherSunny fontSize={27} />
            <a href="clima"> Verificar Clima</a>
          </li>
        </ul>

        <span
          className="pontos"
          onClick={reloadPoints}
          title="Para Recarregar os pontos clique aqui!"
        >
          {" "}
          <BiHappyBeaming fontSize={34} />
          Pontos: {localStorage.getItem("pontos")}
        </span>
        {/* </div> */}
      </nav>
    </div>
  );
}
