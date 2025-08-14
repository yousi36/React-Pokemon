import "./Pokemon.css";
export function PokemonCard({ item }) {
  return (
    <>
    <div className="pokemon-card">
      <figure className="pokemon-figure">
      </figure>
      <p className="pokemon-name">{item.name}</p>
      <div>
        <p></p>
      </div>
    </div>
    </>
  );
}
