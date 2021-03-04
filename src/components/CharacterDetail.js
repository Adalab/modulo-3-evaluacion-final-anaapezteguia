import "../stylesheets/layout/_charDetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const charProps = props.selectedCharacter; //OBJETO!!!!!!
  return (
    <section className="charDetail">
      <Link to="/" className="charDetail__link">
        <i className="fas fa-arrow-alt-circle-left">
          <span className="charDetail__back">Back</span>
        </i>
      </Link>
      <div className="charDetail__wrap">
        <img
          className="charDetail__img"
          src={charProps.image}
          alt={charProps.name}
          title={charProps.name}
        />
        <div className="charDetail__info">
          <h3 className="charDetail__info--name">{charProps.name}</h3>
          <p>Species: {charProps.species}</p>
          <p>Origin: {charProps.origin}</p>
          <p>Appears in {charProps.episodes} episodes.</p>
          <p>
            Status:
            <i
              className={props.statusIcon}
              title={`Status: ${charProps.status}`}
            ></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharacterDetail;
