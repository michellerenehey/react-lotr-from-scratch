import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';

import CharactersList from '../../components/CharactersList/CharactersList';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, query);
      setCharacters(data);
    };
    fetchData();
  }, [race, query]);

  return (
    <div>
      <input
        type="text"
        placeholder="search character here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      {characters.map((character) => {
        return <CharactersList key={character.id} {...character} />;
      })}
    </div>
  );
}
