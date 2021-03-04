import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  // const [filteredSpecies, setFilteredSpecies] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  // console.log(characters);

  const handleFilter = (newValue) => {
    if (newValue.key === "name") {
      setName(newValue.value);
    }
    // else if (newValue.key === "selectSpecies") {
    //   setFilteredSpecies(newValue.value);
    // }
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });
  // .filter((character) => {
  //   if (filteredSpecies === "") {
  //     return true;
  //   } else {
  //     console.log(character.species);
  //     return character.species === filteredSpecies;
  //   }
  // });
  const renderCharacterDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail selectedCharacter={selectedCharacter} />;
  };

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <Filters handleFilter={handleFilter} />
        <Switch>
          <Route exact path="/">
            <CharacterList characterList={filteredCharacters} />
          </Route>
          <Route path="/character-details/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
