import React, { useState, useEffect } from "react";
import "./atividades.scss";
import Header from "../Header/Header";

const Atividades = () => {
  const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
  const [pontos, setPontos] = useState([]);
  var valor = localStorage.getItem("pontos");
  console.log("valor dos pontos" + valor);
  useEffect(() => {
    const newPontos = atividades.map((atividade) => {
      switch (atividade.tipoAtividade) {
        case "reciclagem":
          return 5;
        case "plantioArvore":
          return 20;
        case "eventoSustentavel":
          return 15;
        case "economiaEnergia":
          return 15;
        default:
          return 0;
      }
    });

    setPontos(newPontos);
  }, [atividades]);
  var acrescimo = 0;
  const totalPontos = pontos.reduce((acc, ponto) => acc + ponto, 0);
  localStorage.setItem("pontos", totalPontos);

  return (
    <>
      <Header />
      {valor === "0" ? (
        <div>
          <h3 className="">
            Olá! Você ainda não possui nenhuma atividade registrada :({" "}
          </h3>
        </div>
      ) : (
        <div id="atividades" className="atividadeContainer">
          {" "}
          <p className="pontos"> pontos atuais: {totalPontos}</p>{" "}
          <h2>Lista de Atividades</h2>{" "}
          {atividades.map((atividade, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
              }}
              className="atividade"
            >
              <h3>
                Atividade: <span className="spanNumber">{index + 1} </span>
              </h3>
              <strong>Tipo de Atividade:</strong> {atividade.tipoAtividade}
              <br /> <strong>Descrição</strong> {atividade.descricao}
              <br /> <strong>Localização</strong> {atividade.localizacao}
              <br /> <strong>Categorias</strong>{" "}
              <div className="">
                {" "}
                {Object.entries(atividade.categorias).map(
                  ([categoria, valor]) =>
                    valor && <span key={categoria}> {categoria}, </span>
                )}
              </div>{" "}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Atividades;
