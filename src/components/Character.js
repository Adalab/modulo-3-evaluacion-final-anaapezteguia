//importar scss

const Character = (props) => {
  return (
    <article>
      {/* <Link to="/"> */}
      <img
        className="main__list--img"
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h3 className="main__list--title">{props.character.name}</h3>
      <p className="main__list--species">{props.character.species}</p>
      {/* </Link> */}
    </article>
  );
};
export default Character;
