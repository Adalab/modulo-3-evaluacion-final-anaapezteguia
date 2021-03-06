import "../../stylesheets/layout/_charDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  const charProps = props.selectedCharacter;
  let statusIcon = "";
  let genderIcon = "";
  if (charProps.status === "Dead") {
    statusIcon = "fas fa-skull";
  } else if (charProps.status === "Alive") {
    statusIcon = "fas fa-heartbeat";
  } else {
    statusIcon = "fas fa-question-circle";
  }
  if (charProps.gender === "Male") {
    genderIcon = "fas fa-mars";
  } else if (charProps.gender === "Female") {
    genderIcon = "fas fa-venus";
  } else {
    genderIcon = "fas fa-question-circle";
  }
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
          <p>Location: {charProps.location}</p>
          <p>Appears in {charProps.episodes} episodes.</p>
          <p>
            Status:
            <i
              className={`${statusIcon} animate__animated animate__rubberBand`}
              title={`Status: ${charProps.status}`}
            ></i>
            ({charProps.status.toLowerCase()})
          </p>
          <p>
            Gender:
            <i
              className={`${genderIcon} animate__animated animate__rubberBand`}
              title={`Gender: ${charProps.gender}`}
            ></i>
            ({charProps.gender.toLowerCase()})
          </p>
        </div>
      </div>
    </section>
  );
};
CharacterDetail.propTypes = {
  selectedCharacter: PropTypes.object,
  src: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;
