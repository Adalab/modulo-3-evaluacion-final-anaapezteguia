//importar scss
import Character from "./Character";

const CharacterList = (props) => {
  const characterList = props.characterList.map((character) => {
    return (
      <li className="main__list--item" key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="main__list">{characterList}</ul>
    </section>
  );
};
export default CharacterList;
