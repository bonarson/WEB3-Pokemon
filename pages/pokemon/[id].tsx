// pages/pokemon/[id].tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  order: number;
}

const Pokemon = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) return;

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <p>Order: {pokemon.order}</p>
    </div>
  );
};

export default Pokemon;
