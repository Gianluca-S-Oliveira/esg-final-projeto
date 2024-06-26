import React, { useState, useEffect } from "react";
import "./clima.scss";
import Header from "../Header/Header";

const Clima = () => {
  const [data, setData] = useState(null);
  const [cidade, setCidade] = useState("");
  const [erro, setErro] = useState(null);

  const buscarClima = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        cidade
      )}&units=metric&lang=br&appid=8cd5a8c23d39c734fa2bfab6beaddc33`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cidade não encontrada");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from API:", data);
        setData(data);
        setErro(null); // Limpar mensagem de erro se a busca for bem-sucedida
      })
      .catch((error) => {
        console.error("Erro ao buscar clima:", error.message);
        setData(null); // Limpar dados se a cidade não for encontrada
        setErro(
          "Cidade não encontrada. Por favor, verifique o nome da cidade e tente novamente."
        );
      });
  };

  const traduzirDescricao = (descricao) => {
    switch (descricao) {
      case "Clear":
        return "Céu Limpo";
      case "Clouds":
        return "Nublado";
      case "Rain":
        return "Chuva";
      // Adicione mais casos conforme necessário
      default:
        return descricao;
    }
  };

  return (
    <>
      <Header />
      <h1 style={{ color: "green", fontSize: "1.6rem" }}>
        Pesquise o nome do lugar incluindo cidades e estados onde <br />
        deseja fazer sua ação, para conferir o clima como está!
      </h1>
      <div id="clima" className="clima-container">
        <h2>Clima</h2>
        <input
          className="cidade-input"
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChange={(e) => {
            setCidade(e.target.value);
          }}
        />
        <button className="buscar-btn" onClick={buscarClima}>
          Mostrar Clima deste Local
        </button>
        {erro && <p className="erro-msg">{erro}</p>}
        {data && (
          <div className="dados-clima">
            <p>
              {" "}
              <strong>Nome da Cidade: </strong>
              {data.name}
            </p>
            <p>
              {" "}
              <strong>Temperatura:</strong> {data.main.temp} °C
            </p>
            <p>
              {" "}
              <strong>Descrição: </strong>
              {traduzirDescricao(data.weather[0].main)}
            </p>
            <p>
              {" "}
              <strong>Umidade: </strong>
              {data.main.humidity}%
            </p>
            <p>
              {" "}
              <strong>Velocidade do Vento: </strong>
              {data.wind.speed} m/s
            </p>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="Ícone do Clima"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Clima;
