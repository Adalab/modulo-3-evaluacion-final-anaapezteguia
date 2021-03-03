import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // console.log(getDataFromApi());
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);
  return (
    <div className="App">
      <main>Hola mundo, probando que se pintan mis datos en la consola :)</main>
    </div>
  );
};

export default App;
