import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav style={{ display: "flex", flexFlow: "column wrap" }}>
        <Link to="/">Formulário</Link>
        <Link to="/props-and-state">Props e state</Link>
        <Link to="/routes-variables/12345?name=algum-nome">
          Variáveis de rota
        </Link>
        <Link to="/custom-hook">Hook customizado</Link>
        <Link to="/pagina-nova">Página não criada</Link>
      </nav>
    </header>
  );
};
