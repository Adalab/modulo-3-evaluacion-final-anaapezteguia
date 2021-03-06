import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";
import NotFound from "./NotFound";

const App = () => {
  //declare states
  const [characters, setCharacters] = useState([]);
  const [nameState, setNameState] = useState("");
  const [speciesState, setSpeciesState] = useState("noFilter");

  // get data from API
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  // handle filter
  const handleFilter = (newValue) => {
    if (newValue.key === "name") {
      setNameState(newValue.value);
    } else if (newValue.key === "speciesValue") {
      setSpeciesState(newValue.value);
    }
  };
  // filters
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameState.toLowerCase());
    })
    .sort((a, z) => (a.name > z.name ? 1 : a.name < z.name ? -1 : 0))
    .filter((character) => {
      return speciesState === "noFilter"
        ? true
        : character.species === speciesState;
    });

  // render character detail page or not found
  const renderCharacterDetail = (props) => {
    //we specify here the param that goes after : at Route component
    const path = props.match.params.url;
    const selectedCharacter = characters.find((character) => {
      // urlPath is a prop specifically prepared at getDataFromApi to prepare the "pretty url" for SEO, out here did not work
      return character.urlPath === path;
    });
    if (selectedCharacter) {
      return <CharacterDetail selectedCharacter={selectedCharacter} />;
    } else {
      return <NotFound />;
    }
  };

  // let's paint something
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              handleFilter={handleFilter}
              nameState={nameState}
              speciesState={speciesState}
            />
            <CharacterList filteredCharacters={filteredCharacters} />
          </Route>
          <Route
            path="/character-details/:url"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
