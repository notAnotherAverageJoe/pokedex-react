// src/components/Pokedex.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import UserPrompt from "./Intro";
import "./Pokedex.css";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemonData(response.data.results);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="pokedex-container">
      {userName ? (
        <h1>Welcome, {userName}! To your first generation Pokedex!</h1>
      ) : (
        <UserPrompt setName={setUserName} />
      )}
      <div className="pokedex">
        {pokemonData.map((pokemon, index) => (
          <Pokemon key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
