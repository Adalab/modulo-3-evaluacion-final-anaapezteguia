import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  const handleFilter = (inputFilter) => {
    if (inputFilter.key === "name") {
      setName(inputFilter.value);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <Filters handleFilter={handleFilter} />
        <CharacterList characterList={filteredCharacters} />
        {/* <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route path="/CharacterDetail"  /> 
        </Switch> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
