import React, { FormEvent, useState } from 'react';
import { searchOMDB } from '../api/API';
import FilmCard from '../components/FilmCard';
import Film from '../utils/interfaces/Film.interface';

const FilmSearch: React.FC = () => {
  const [currentFilm, setCurrentFilm] = useState<Film | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');

  const addToWatchList = () => {
    if (currentFilm) {
      let parsedFilmsToWatch: Film[] = [];
      const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
      if (storedFilmsToWatch) {
        parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
      }
      parsedFilmsToWatch.push(currentFilm);
      localStorage.setItem('filmsToWatch', JSON.stringify(parsedFilmsToWatch));
    }
  };

  const addToSeenItList = () => {
    if (currentFilm) {
      let parsedAlreadySeenFilms: Film[] = [];
      const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
      if (storedAlreadySeenFilms) {
        parsedAlreadySeenFilms = JSON.parse(storedAlreadySeenFilms);
      }
      parsedAlreadySeenFilms.push(currentFilm);
      localStorage.setItem(
        'alreadySeenFilms',
        JSON.stringify(parsedAlreadySeenFilms)
      );
    }
  };

  const searchForFilmByTitle = async (event: FormEvent) => {
    event.preventDefault();
    const data: Film = await searchOMDB(searchInput);
    setCurrentFilm(data);
  };

  return (
    <>
      <section id='searchSection'>
        <form onSubmit={searchForFilmByTitle}>
          <input
            type='text'
            placeholder='Enter a Film'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      {currentFilm && (
        <FilmCard
          currentFilm={currentFilm}
          addToWatchList={addToWatchList}
          addToSeenItList={addToSeenItList}
        />
      )}
    </>
  );
};

export default FilmSearch;