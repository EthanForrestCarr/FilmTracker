import React, { useEffect, useState } from 'react';
import FilmsAlreadySeen from '../components/FilmsAlreadySeen';
import Film from '../utils/interfaces/Film.interface';

const SeenIt: React.FC = () => {
  const [alreadyWatchedFilms, setAlreadyWatchedFilms] = useState<Film[]>([]);

  const removeFromStorage = (title: string) => {
    const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    if (storedAlreadySeenFilms) {
      const parsedAlreadySeenFilms: Film[] = JSON.parse(storedAlreadySeenFilms);
      const updatedAlreadySeenFilms = parsedAlreadySeenFilms.filter(
        (film) => film.Title !== title
      );

      setAlreadyWatchedFilms(updatedAlreadySeenFilms);
      localStorage.setItem(
        'alreadySeenFilms',
        JSON.stringify(updatedAlreadySeenFilms)
      );
    }
  };

  useEffect(() => {
    const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    if (storedAlreadySeenFilms) {
      const parsedAlreadyWatchedFilms: Film[] = JSON.parse(storedAlreadySeenFilms);
      setAlreadyWatchedFilms(parsedAlreadyWatchedFilms);
    }
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Seen It</h1>
      {alreadyWatchedFilms.length === 0 ? (
        <h1 style={{ margin: '16px 0' }}>Add films you've already seen here.</h1>
      ) : (
        <FilmsAlreadySeen
          alreadyWatchedFilms={alreadyWatchedFilms}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default SeenIt;
