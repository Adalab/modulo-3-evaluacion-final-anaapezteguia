import "../stylesheets/layout/_notFound.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="notFound">
      <div className="wrapper">
        <h1 className="notFound__title">404 Error</h1>
        <p className="notFound__text">
          <span className="block">Whooops!</span> Looks like this page doesn't
          exist
        </p>
        <Link to="/" className="notFound__link">
          <i className="fas fa-arrow-alt-circle-left">
            <span className="notFound__back">Back</span>
          </i>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
