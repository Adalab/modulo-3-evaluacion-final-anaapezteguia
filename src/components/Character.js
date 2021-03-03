import "../stylesheets/layout/_character.scss";

const Character = (props) => {
  return (
    <article className="character">
      {/* <Link to="/"> */}
      <img
        className="character__img"
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <div className="character__wrap">
        <h3 className="character__name">{props.character.name}</h3>
        <p className="character__species">{props.character.species}</p>
      </div>
      {/* </Link> */}
    </article>
  );
};
export default Character;
