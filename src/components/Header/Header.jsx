import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <Link
        className="logo"
        to={"/"}
      >
        Prime Flix
      </Link>
      <Link
        className="favorites"
        to={"/favorites"}
      >
        Meus Filmes
      </Link>
    </header>
  );
};
