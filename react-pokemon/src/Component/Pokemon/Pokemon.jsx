import { useEffect, useState } from "react";
import "./Pokemon.css";
import { PokemonCard } from "./PokemonCard";
export const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [inputValue,setInputValue]=useState("");
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=124";
  //fetchapi functionality
  const fetchPokemon = async () => {
    try{
    const response = await fetch(apiUrl);
    const data = await response.json();

    
    const pokemonPromise=data.results.map(async(curr)=>{
      const res=await fetch(curr.url);
      return await res.json();
    })
    
    const detailPokemonData=await Promise.all(pokemonPromise);
    setPokemonData(detailPokemonData)
    setLoading(false);
    }
    catch{

    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
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
        <div className="pokemon-search">
          <input type="text" placeholder="Search " value={inputValue} onChange={(e)=>{
            setInputValue(e.target.value)
          }}></input>
        </div>
        <section>
          <ul className="pokemon-container">
            {pokemonData.map((curr) => {
              return <PokemonCard item={curr} key={curr.id}></PokemonCard>;
            })}
          </ul>
        </section>
      </section>
    </>
  );
};
