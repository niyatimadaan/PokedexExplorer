import { useState } from 'react';
import { trpc } from '../utils/trpc';
import { PokedexTable } from '../components/pokedexTable';

export default function Pokedex() {
  const [type, setType] = useState('');
  const { data: pokemonArray, refetch } = trpc.getPokemonByType.useQuery(type, { enabled: false });

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <form onSubmit={handleFilter}>
        <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Enter Pokemon type" />
        <button type="submit">Filter by Type</button>
      </form>
      {pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </div>
  );
}
