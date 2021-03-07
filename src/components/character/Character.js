import "../../stylesheets/layout/_character.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Character = (props) => {
  let statusIcon = "";
  if (props.character.status === "Dead") {
    statusIcon = "fas fa-skull";
  } else if (props.character.status === "Alive") {
    statusIcon = "fas fa-heartbeat";
  } else {
    statusIcon = "fas fa-question-circle";
  }

  return (
    <article className="character animate__animated animate__flipInX">
      <Link to={`/character-details/${props.character.urlPath}`}>
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
              className={statusIcon}
              title={`Status: ${props.character.status}`}
            ></i>
          </p>
        </div>
      </Link>
    </article>
  );
};
Character.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  urlPath: PropTypes.string,
};
export default Character;
