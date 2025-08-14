import "./Pokemon.css";
export function PokemonCard({ item }) {
  return (
    <>
      <div className="pokemon-card">
        <figure className="pokemon-figure">
          <img
            className="pokemon-img"
            src={item.sprites.other.dream_world.front_default}
            alt={item.name}
          ></img>
        </figure>
        <p className="pokemon-name">{item.name}</p>
        <div className="pokemon-btn">
          <p>
            {item.types
              .map((data) => {
                return data.type.name;
              })
              .join(",")}
          </p>
        </div>

        <div className="grid-three-cols">
          <div className="pokemon-info">
            <p>{item.base_experience}</p>
            <span> Experience:</span>
          </div>
          <div className="pokemon-info">
            <p>{item.stats[1].base_stat}</p>
            <span>Attack:</span>
          </div>
        </div>
      </div>
    </>
  );
}
