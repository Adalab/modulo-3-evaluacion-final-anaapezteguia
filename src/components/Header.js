import logo from "../images/Rick-and-Morty-logo.png";
import "../stylesheets/layout/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        title="Ricky and Morty"
        alt="Ricky and Morty"
      />
    </header>
  );
};

export default Header;
