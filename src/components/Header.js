import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav style={{ display: "flex", flexFlow: "column wrap" }}>
        <Link to="/">Formulário</Link>
        <Link to="/props-and-state">Props e state</Link>
        <Link to="/pagina-nova">Página não criada</Link>
      </nav>
    </header>
  );
};
