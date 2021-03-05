import "../stylesheets/layout/_charList.scss";
import Character from "./Character";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  const arrangedList = props.filteredCharacters.map((character) => {
    return (
      <li className="charList__item" key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <section className="charList">
      <h1 className="charList__title">Characters</h1>
      <ul className="charList__list">{arrangedList}</ul>
    </section>
  );
};
CharacterList.propTypes = {
  character: PropTypes.object,
  filteredCharacters: PropTypes.arrayOf(PropTypes.object),
};
export default CharacterList;
