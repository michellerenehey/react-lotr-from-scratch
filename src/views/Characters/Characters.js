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

  // const handleClick = async () => {
  //   const data = await fetchCharacters(race, query);
  //   setCharacters(data);
  //   setQuery('');
  // };

  return (
    <div className="charactersPage">
      <div className="controlsPanel">
        <select className="controls" value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
        <input
          className="controls"
          type="text"
          placeholder="enter character name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="controls" onClick={() => setLoading(true)}>
          Search Character
        </button>
      </div>
      <div className="display">
        {characters.map((character) => {
          return <CharactersList key={character.id} {...character} />;
        })}
      </div>
    </div>
  );
}
