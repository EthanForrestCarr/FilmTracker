import React from 'react';
import Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

interface FilmsAlreadySeenProps {
  alreadyWatchedFilms: Film[];
  removeFromStorage: (title: string) => void;
}

const FilmsAlreadySeen: React.FC<FilmsAlreadySeenProps> = ({
  alreadyWatchedFilms,
  removeFromStorage,
}) => {
  return (
    <ul>
      {alreadyWatchedFilms.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onSeenItList={true}
          removeFromStorage={() => removeFromStorage(film.Title)}
        />
      ))}
    </ul>
  );
};

export default FilmsAlreadySeen;
