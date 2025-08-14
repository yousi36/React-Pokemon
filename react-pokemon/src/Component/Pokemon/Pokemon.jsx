import { useEffect, useState } from "react";
import "./Pokemon.css";
import { PokemonCard } from "./PokemonCard";
export const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiUrl = "https://pokeapi.co/api/v2/ability/?offset=0&limit=20";
  //fetchapi functionality 
  const fetchPokemon = () => {
    fetch(apiUrl)
      .then((data) => {
        return data.json();
      })
      .then((data) => { 
        setPokemonData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  useEffect(()=>{
     fetchPokemon();
  },[])
  //loading functionality
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error.length != 0) {
    return <h3>{error}</h3>;
  }
  return (
    <>
      <section>
        <header>
          <h3>Lets Catch Pokemon</h3>
        </header>
        <section>
          <ul className="pokemon-container">
            {pokemonData.map((curr) => {
                return <PokemonCard  className="pokemon-card" item={curr} key={curr.name}></PokemonCard>
            })}
          </ul>
        </section>
      </section>
    </>
  );
};
