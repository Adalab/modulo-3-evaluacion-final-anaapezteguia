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
  const [species, setSpecies] = useState("noFilter");
  const message =
    "There is no character that matches your search. Please try again.";
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (newValue) => {
    console.log(newValue);
    if (newValue.key === "name") {
      setName(newValue.value);
    } else if (newValue.key === "speciesValue") {
      setSpecies(newValue.value);
    }
    // console.log(species);
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .sort((a, z) => (a.name > z.name ? 1 : a.name < z.name ? -1 : 0))
    .filter((character) => {
      return species === "noFilter" ? true : character.species === species;
      // if (species === "noFilter") {
      //   return true;
      // } else {
      //   return character.species === species;
      // }
    });

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
      <Filters handleFilter={handleFilter} />
      <main className="wrapper">
        <p className="charList_message hidden">{message}</p>
        <Switch>
          <Route exact path="/">
            <CharacterList filteredCharacters={filteredCharacters} />
          </Route>
          <Route path="/character-details/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
