import "../stylesheets/layout/_notFound.scss";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="wrapper">
        <h1 className="notFound__title">404 Error</h1>
        <p className="notFound__text">
          <span className="block">Whooops!</span> Looks like this page doesn't
          exist
        </p>
      </div>
    </section>
  );
};

export default NotFound;
