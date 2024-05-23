import React, { useState } from "react";
import "./form.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgimg from "../../images/bgFundo.jpg";
import Header from "../Header/Header";
const FormularioAtividade = () => {
  const [tipoAtividade, setTipoAtividade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  const [categorias, setCategorias] = useState({
    eventoSustentavel: false,
    impactoSocial: false,
    governanca: false,
  });

  const handleTipoAtividadeChange = (event) => {
    setTipoAtividade(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleLocalizacaoChange = (event) => {
    setLocalizacao(event.target.value);
  };

  const handleCategoriaChange = (categoria) => {
    setCategorias({
      ...categorias,
      [categoria]: !categorias[categoria],
    });
  };

  const handleSubmit = (event) => {
    toast.success("Atividade Registrada com sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    event.preventDefault();

    // Cria um objeto com os dados do formulário
    const novaAtividade = {
      tipoAtividade,
      descricao,
      localizacao,
      categorias,
    };

    // Recupera as atividades já existentes no localStorage
    const atividadesExist =
      JSON.parse(localStorage.getItem("atividades")) || [];

    // Adiciona a nova atividade à lista
    const novasAtividades = [...atividadesExist, novaAtividade];

    // Atualiza o localStorage com a lista atualizada de atividades
    localStorage.setItem("atividades", JSON.stringify(novasAtividades));

    // Limpa o formulário
    setTipoAtividade("");
    setDescricao("");
    setLocalizacao("");

    setCategorias({
      eventoSustentavel: false,
      impactoSocial: false,
      governanca: false,
    });
  };

  return (
    <>
      <Header />
      {" "}
      <div
        className="img


    "
      >
        {" "}
        <img className="" src={bgimg} />{" "}
      </div>{" "}
      <form onSubmit={handleSubmit} className="form">
        {" "}
        <h2 className="">REGISTRO DE ATIVIDADE ESG</h2>{" "}
        <div className="formConteudo">
          {" "}
          <div className="tipoAtiv">
            {" "}
            <label className="tituloForm">Tipo de Atividade:</label>{" "}
            <select
              value={tipoAtividade}
              onChange={handleTipoAtividadeChange}
              className="select"
            >
              {" "}
              <option value="">Selecione o tipo de atividade</option>{" "}
              <option value="reciclagem">Reciclagem (5 pontos)</option>{" "}
              <option value="eventoSustentavel">
                {" "}
                Evento Sustentável (15 pontos){" "}
              </option>{" "}
              <option value="economiaEnergia">
                {" "}
                Economia de Energia (10 pontos){" "}
              </option>{" "}
              <option value="plantioArvore">
                {" "}
                Plantio de Árvore (20 pontos){" "}
              </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="descricaoAtv">
            {" "}
            <label className="tituloForm">Descrição da Atividade:</label>{" "}
            <input
              type="text"
              value={descricao}
              onChange={handleDescricaoChange}
            />{" "}
          </div>{" "}
          <div className="localizacaoAtv">
            {" "}
            <label className="tituloForm">Localização:</label>{" "}
            <input
              type="text"
              value={localizacao}
              onChange={handleLocalizacaoChange}
            />{" "}
          </div>{" "}
          <div className="categoriaAtv">
            {" "}
            <label className="tituloForm">Categoria:</label>{" "}
            <div>
              {" "}
              <label className="optionCheck">
                {" "}
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={categorias.eventoSustentavel}
                  onChange={() => handleCategoriaChange("eventoSustentavel")}
                />{" "}
                Evento Sustentável{" "}
              </label>{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="optionCheck">
                {" "}
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={categorias.impactoSocial}
                  onChange={() => handleCategoriaChange("impactoSocial")}
                />{" "}
                Impacto Social{" "}
              </label>{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="optionCheck">
                {" "}
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={categorias.governanca}
                  onChange={() => handleCategoriaChange("governanca")}
                />{" "}
                Governança{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <button type="submit">Adicionar</button>{" "}
      </form>{" "}
      <ToastContainer
        style={{
          width: "450px",
          height: "500px",
          fontSize: "1.3rem",
        }}
      />{" "}
    </>
  );
};

export default FormularioAtividade;
