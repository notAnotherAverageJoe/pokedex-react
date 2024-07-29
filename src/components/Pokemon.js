import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pokemon.css";

const Pokemon = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await axios.get(url);
      setPokemonDetails(response.data);
    };

    fetchPokemonDetails();
  }, [url]);

  return (
    <div className="pokemon-card">
      <h3>{name}</h3>
      {pokemonDetails.sprites && (
        <img src={pokemonDetails.sprites.front_default} alt={name} />
      )}
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      {pokemonDetails.types && (
        <div className="pokemon-types">
          {pokemonDetails.types.map((typeInfo, index) => (
            <span key={index} className={`type ${typeInfo.type.name}`}>
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemon;
