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
  const [originState, setOriginState] = useState([]);
  // const [uniqueOrgState, setUniqueOrgState] = useState([]);

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
    } else if (newValue.key === "origin") {
      const indexOrigin = originState.indexOf(newValue.value);
      if (indexOrigin === -1) {
        setOriginState([...originState, newValue.value]);
      } else {
        const newOrigin = [...originState];
        newOrigin.splice(indexOrigin, 1);
        setOriginState(newOrigin);
      }
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
    })
    .filter((character) => {
      return originState.length === 0
        ? true
        : originState.includes(character.origin);
    });
  // step1: extract origins
  const getOrigin = characters.map((character) => {
    return character.origin;
  });
  // step 2: check for duplicates,if so it returns true
  const checkForDuplicates = (array, keyName) => {
    return new Set(array.map((item) => item[keyName])).size !== array.length;
  };
  // console.log(checkForDuplicates(getOrigin, origin));

  // step 3: make a new array (this was a tough one to find out!!!)
  const uniqueOrigin = [...new Set(getOrigin)];
  // setUniqueOrgState(uniqueOrigin);
  // console.log(uniqueOrigin);

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
              uniqueOrigin={uniqueOrigin}
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
