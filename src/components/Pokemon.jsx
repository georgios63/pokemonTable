import PokemonCard from "./PokemonCard";
import { pokemons } from "./Pokemons";
import { useState } from "react";

export default function Pokemon() {
  const [pokemonList, set_pokemonList] = useState(pokemons);

  const table = () => {
    pokemonList.length ? set_pokemonList([]) : set_pokemonList(pokemons);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <button className="btn btn-outline-primary m-4 " onClick={table}>
        {pokemonList.length ? "Clear Table" : "Show Pokemons"}
      </button>
      <table className="table  table-hover table-dark table-bordered">
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
          {pokemonList.map((pokemon, index) => {
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
