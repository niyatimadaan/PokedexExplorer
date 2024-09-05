import { Pokemon } from '@prisma/client';
import { PokemonRow } from './pokemonRow';

type PokedexTableProps = {
  pokemonArray: Pokemon[];
};

export const PokedexTable = ({ pokemonArray }: PokedexTableProps) => (
  <div>
    {pokemonArray.map((pokemon) => (
      <PokemonRow key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
