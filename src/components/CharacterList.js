import "../stylesheets/layout/_charList.scss";
import Character from "./Character";
import PropTypes from "prop-types";

let ghostClass = "hidden";
const CharacterList = (props) => {
  let message = "";
  let arrangedList = [];
  console.log(props.filteredCharacters.length);
  if (props.filteredCharacters.length === 0) {
    ghostClass = "";
    message =
      "There is no character that matches your search. Please try again.";
  } else {
    ghostClass = "hidden";
    arrangedList = props.filteredCharacters.map((character) => {
      return (
        <li className="charList__item" key={character.id}>
          <Character character={character} />
        </li>
      );
    });
  }
  return (
    <section className="charList">
      <div className="wrapper">
        <h1 className="charList__title">Characters</h1>
        <p className={`charList__message ${ghostClass}`}>{message}</p>
        <ul className="charList__list">{arrangedList}</ul>
      </div>
    </section>
  );
};
CharacterList.propTypes = {
  character: PropTypes.object,
  filteredCharacters: PropTypes.arrayOf(PropTypes.object),
};
export default CharacterList;
