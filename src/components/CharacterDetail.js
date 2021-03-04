import "../stylesheets/layout/_charDetail.scss";

const CharacterDetail = (props) => {
  const charProps = props.selectedCharacter; //OBJETO!!!!!!
  const status = charProps.status;
  let statusIcon = "";
  if (status === "Dead") {
    statusIcon = "fas fa-skull";
  } else if (status === "Alive") {
    statusIcon = "fas fa-heartbeat";
  } else {
    statusIcon = "fas fa-question-circle";
  }
  return (
    <section className="charDetail">
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
            Status: <i className={statusIcon} title={status}></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharacterDetail;
