import './Characters.css';

import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';

import CharactersList from '../../components/CharactersList/CharactersList';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // grab just race data, connect it to drop-down
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setCharacters(data);
    };
    fetchData();
  }, [race]);

  // grab query data, connect it to input value
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, query);
      setCharacters(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, race, query]);

  return (
    <div>
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <input
        type="text"
        placeholder="search character here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setLoading(true)}>Submit</button>
      {characters.map((character) => {
        return <CharactersList key={character.id} {...character} />;
      })}
    </div>
  );
}
