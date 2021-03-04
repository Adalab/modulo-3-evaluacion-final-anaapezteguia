import "../stylesheets/layout/_charList.scss";
import Character from "./Character";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  const arrangedList = props.arrangedList.map((character) => {
    return (
      <li className="charList__item" key={character.id}>
        <Character character={character} statusIcon={props.statusIcon} />
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
  arrangedList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CharacterList;
