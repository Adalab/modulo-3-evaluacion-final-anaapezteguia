import "../stylesheets/layout/_charList.scss";
import Character from "./Character";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  const characterList = props.characterList.map((character) => {
    return (
      <li className="charList__item" key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <section className="charList">
      <h1 className="charList__title">Characters</h1>
      <ul className="charList__list">{characterList}</ul>
    </section>
  );
};
CharacterList.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CharacterList;
