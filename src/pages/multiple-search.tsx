import { useState } from 'react';
import { trpc } from '../utils/trpc';
import { PokedexTable } from '../components/pokedexTable';

export default function Pokedex() {
  const [names, setNames] = useState('');
  const { data: pokemonArray, refetch } = trpc.getPokemonArray.useQuery(
    names.split(',').map((name) => name.trim()),
    { enabled: false }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={names}
          onChange={(e) => setNames(e.target.value)}
          placeholder="Enter comma-separated Pokémon names (e.g., Bulbasaur, Charmander)"
        />
        <button type="submit">Fetch Pokémon</button>
      </form>
      {pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </div>
  );
}
