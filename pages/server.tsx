// pages/server.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Pokemon {
  name: string;
}

const Server = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${(currentPage - 1) * 50}`);
      const data = await res.json();
      setPokemonList(data.results);
    };

    fetchPokemon();
  }, [currentPage]);

  return (
    <div>
      <h1>Server</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              <span>{pokemon.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Server;
