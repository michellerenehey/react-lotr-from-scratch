import './Films.css';

import { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';

import FilmsList from '../../components/FilmsList/FilmsList';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {films.map((film) => {
        return <FilmsList key={film.id} {...film} />;
      })}
    </div>
  );
}
