import PokemonCard from "./PokemonCard";
import { pokemons } from "./Pokemons";

export default function Pokemon() {
  return (
    <div>
      <h1>Pokedex</h1>
      <table className="table table-hover table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Weight</th>
            <th scope="col">Awesome</th>
            <th scope="col">Terrifying</th>
            <th scope="col">Abilities</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon, index) => {
            return (
              <PokemonCard
                key={index}
                name={pokemon.name}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
