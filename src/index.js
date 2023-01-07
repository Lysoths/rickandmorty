import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Components/Cards.js";

function App() {
  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
        );
        setCharacters(response.data);
        setInfo(response.data.info.count);
      } catch (error) {
        console.error("error!");
      }
    }

    getApi();
  }, [search]);

  return (
    <div className='container'>
      <div className='search'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png'
          alt=''
          className='rickImage'
        />
        <input
          type='text'
          name=''
          id=''
          placeholder='Search Characters...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className='total'>Total Characters : {info}</p>
      </div>
      {characters && <Cards characters={characters} />}
      <div className='buttons'>
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
