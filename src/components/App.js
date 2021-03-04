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
  //     return character.species === filteredSpecies;
  //   }
  // });
  const arrangedList = filteredCharacters.sort((a, z) =>
    a.name > z.name ? 1 : a.name < z.name ? -1 : 0
  );
  const message =
    "There is no character that matches your search. Please try again.";
  // if (filteredCharacters === ) {
  //   alert(message);
  // } else {
  //   console.log("katacroker");
  // }
  let statusIcon = "";
  const statusArray = filteredCharacters.map((character) => {
    if (character.status === "Dead") {
      return (statusIcon = "fas fa-skull");
    } else if (character.status === "Alive") {
      return (statusIcon = "fas fa-heartbeat");
    } else {
      return (statusIcon = "fas fa-question-circle");
    }
  });
  const renderCharacterDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    return (
      <CharacterDetail
        selectedCharacter={selectedCharacter}
        statusIcon={statusIcon}
      />
    );
  };

  return (
    <div className="App">
      <Header />
      <Filters handleFilter={handleFilter} />
      <main className="wrapper">
        <p className="charList_message hidden">{message}</p>
        <Switch>
          <Route exact path="/">
            <CharacterList
              arrangedList={arrangedList}
              statusIcon={statusIcon}
            />
          </Route>
          <Route path="/character-details/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
