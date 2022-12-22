import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ErrorFetch from "./components/ErrorFetch";
import Locationinfo from "./components/Locationinfo";
import ResidentCard from "./components/ResidentCard";
import rick from "./img/rick.png"

function App() {
  const [rickandmorty, setRickandMorty] = useState();
  const [rickandmortyInput, setRickandmortyInput] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let URL;
    if (rickandmortyInput) {
      URL = `https://rickandmortyapi.com/api/location/${rickandmortyInput}`;
    } else {
      const ramdomIdLocation = Math.ceil(Math.random() * 126) + 1;
      URL = `https://rickandmortyapi.com/api/location/${ramdomIdLocation}`;
    }

    axios
      .get(URL)
      .then((res) => {
        setRickandMorty(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [rickandmortyInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRickandmortyInput(e.target.inputSearch.value);
  };

  //console.log(rickandmorty)
  return (
    <div className="App">
    <section className="header-img">
    </section>
    <h1 className="logo">Rick & Morty</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" id="inputSearch" type="text" /> 
        <button className="button">Search</button>
      </form>
   

      {hasError ? (
        <ErrorFetch />
      ) : (
        <>
          <Locationinfo rickandmorty={rickandmorty} />
          <div className="residents-container">
            {rickandmorty?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
