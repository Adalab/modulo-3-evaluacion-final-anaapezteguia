const getDataFromApi = () => {
  return (
    fetch(
      "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
    )
      // cambiar por https://rickandmortyapi.com/api/character antes de subir
      .then((response) => response.json())
      .then((data) => {
        return data.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            type: character.type,
            gender: character.gender,
            origin: character.origin.name,
            location: character.location.name,
            image: character.image,
            episodes: character.episode,
            created: character.created,
          };
        });
      })
  );
};
export default getDataFromApi;
