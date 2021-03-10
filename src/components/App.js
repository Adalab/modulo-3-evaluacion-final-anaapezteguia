import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./filters/Filters";
import CharacterList from "./character/CharacterList";
import CharacterDetail from "./character/CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";
import NotFound from "./NotFound";

const App = () => {
  //declare states to control
  const [characters, setCharacters] = useState([]);
  const [nameState, setNameState] = useState("");
  const [speciesState, setSpeciesState] = useState("noFilter");
  const [originState, setOriginState] = useState([]);
  const [statusState, setStatusState] = useState("All");

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
    } else if (newValue.key === "statusValue") {
      setStatusState(newValue.value);
    }
  };
  // extract origins to new array
  const getSelected = () => {
    // step1: map
    const getOrigin = characters.map((character) => {
      return character.origin;
    });
    // step 2: check for duplicates,if so it returns true (just for checking)
    const checkForDuplicates = (array, keyName) => {
      return new Set(array.map((item) => item[keyName])).size !== array.length;
    };
    // console.log(checkForDuplicates(getOrigin, origin));

    // step 3: make a new array (this was a tough one! => OMG! number 2)
    const uniqueOrigin = [...new Set(getOrigin)];

    return uniqueOrigin;
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
    })
    .filter((character) => {
      return statusState === "All" ? true : character.status === statusState;
    });

  // reset button
  const handleReset = () => {
    setNameState("");
    setSpeciesState("noFilter");
    setStatusState("All");
    setOriginState([]);
  };

  // render character detail page or not found
  const renderCharacterDetail = (props) => {
    //we specify here the param that goes after : at Route component => :url
    const path = props.match.params.url;
    const selectedCharacter = characters.find((character) => {
      // urlPath is a prop I have specifically prepared at getDataFromApi to prepare the "pretty url" for SEO, out here did not work => OMG! number 1
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
              getSelected={getSelected()}
              originState={originState}
              statusState={statusState}
              handleReset={handleReset}
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
