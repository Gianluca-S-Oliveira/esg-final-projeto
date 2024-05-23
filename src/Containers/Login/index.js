import { BiUserCircle } from "react-icons/bi";
import FormInput from "../../compoenentes/formInput";
import imagem from "../../images/loginImg.png";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function LoginPage() {
  const [nome, setNome] = useState('')
  const Register = () => {
    localStorage.setItem('nome', nome)
  };
  return (
    <>

      <section className="loginContainer">
        <section className="picture">
          <img src={imagem} />
        </section>

        <section className="form">
          <BiUserCircle color="aquamarine" className="icon" />
          <label className="label"> Nome</label>
          <input className="input" placeholder="Nome" labelText={"Nome"} onChange={(nome) => setNome(nome.target.value)} />
          <FormInput placeholderText={"Senha"} labelText={"Senha"} />{" "}
          <Link to="/home" className="a" onClick={Register}>
            Entrar
          </Link>
        </section>
      </section >
    </>
  );
}
