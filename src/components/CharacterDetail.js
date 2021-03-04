const CharacterDetail = (props) => {
  const charProps = props.selectedCharacter; //OBJETO!!!!!!
  return (
    <section>
      <img
        className=""
        src={charProps.image}
        alt={charProps.name}
        title={charProps.name}
      />
      <div className="">
        <p>Name: {charProps.name}</p>
        <p>Species: {charProps.species}</p>
        <p>Origin: {charProps.origin}</p>
        <p>Episodes: {charProps.episodes.length}</p>
        <p>Dead or alive? {charProps.status}</p>
      </div>
    </section>
  );
};

export default CharacterDetail;
