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
      console.log(data);
    };
    fetchData();
  }, [race, query]);

  return (
    <div>
      {characters.map((character) => {
        return <CharactersList key={character.id} {...character} />;
      })}
    </div>
  );
}
