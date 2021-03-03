import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Filters from "./Filters";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);
  return (
    <div className="App">
      <Header />
      <main className="main">
        {/* <Filters /> */}
        <CharacterList characterList={characters} />
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
