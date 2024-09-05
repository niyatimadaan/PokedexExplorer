import { useState } from 'react';
import { trpc } from '../utils/trpc';
import { PokemonRow } from '../components/pokemonRow';
import Link from 'next/link';

export default function Home() {
  const [name, setName] = useState('');
  const { data: pokemon, refetch } = trpc.getPokemon.useQuery(name, { enabled: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <h1>Pokedex App</h1>
      <ul>
        <li>
          <Link href="/pokedex">View Pokedex</Link>
        </li>
        <li>
          <Link href="/add-pokemon">Add Pokémon</Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Pokemon name" />
        <button type="submit">Fetch Pokemon</button>
      </form>
      {pokemon && <PokemonRow pokemon={pokemon} />}
    </div>
  );
}
