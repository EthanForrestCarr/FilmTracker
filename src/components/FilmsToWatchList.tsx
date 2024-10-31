import React from 'react';
import Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

interface FilmsToWatchListProps {
  filmsToWatch: Film[];
  removeFromStorage: (title: string) => void;
}

const FilmsToWatchList: React.FC<FilmsToWatchListProps> = ({
  filmsToWatch,
  removeFromStorage,
}) => {
  return (
    <ul>
      {filmsToWatch.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onWatchList={true}
          removeFromStorage={() => removeFromStorage(film.Title)}
        />
      ))}
    </ul>
  );
};

export default FilmsToWatchList;
