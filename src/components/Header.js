import logo from "../images/Rick-and-Morty-logo.png";
import "../stylesheets/layout/_header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__img  animate__animated animate__pulse animate__slower animate__infinite"
          src={logo}
          title="Ricky and Morty"
          alt="Ricky and Morty"
        />
      </Link>
    </header>
  );
};

export default Header;
