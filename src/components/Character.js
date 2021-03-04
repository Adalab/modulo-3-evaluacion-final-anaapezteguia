import "../stylesheets/layout/_character.scss";
import { Link } from "react-router-dom";

const Character = (props) => {
  const status = props.character.status;
  let statusIcon = "";
  if (status === "Dead") {
    statusIcon = "fas fa-skull";
  } else if (status === "Alive") {
    statusIcon = "fas fa-heartbeat";
  } else {
    statusIcon = "fas fa-question-circle";
  }
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
            <i className={statusIcon} title={status}></i>
          </p>
        </div>
      </Link>
    </article>
  );
};
export default Character;
