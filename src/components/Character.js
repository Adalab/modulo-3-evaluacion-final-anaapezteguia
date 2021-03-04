import "../stylesheets/layout/_character.scss";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <article className="character">
      <Link to={`/character-details/${props.character.id}`}>
        <img
          className="character__img"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <div className="character__wrap">
          <h3 className="character__name">{props.character.name}</h3>
          <p className="character__species">
            {props.character.species}
            <i
              className={props.statusIcon}
              title={`Status: ${props.character.status}`}
            ></i>
          </p>
        </div>
      </Link>
    </article>
  );
};
export default Character;
