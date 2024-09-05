import { Pokemon } from '@prisma/client';

type PokemonRowProps = {
  pokemon: Pokemon;
};

export const PokemonRow = ({ pokemon }: PokemonRowProps) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img src={pokemon.sprite} alt={pokemon.name} width={50} />
    <div>{pokemon.id}</div>
    <div>{pokemon.name}</div>
    <div>{pokemon.types.join(', ')}</div>
  </div>
);
