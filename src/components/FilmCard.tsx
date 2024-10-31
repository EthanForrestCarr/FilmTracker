import type Film from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';


type FilmCardProps = {
  currentFilm: Film;
  onWatchList?: boolean;
  onSeenItList?: boolean;
  addToWatchList?: () => void;
  addToSeenItList?: () => void;
  removeFromStorage?: () => void;
};

const FilmCard: React.FC<FilmCardProps> = ({
  currentFilm,
  onWatchList,
  onSeenItList,
  addToWatchList,
  addToSeenItList,
  removeFromStorage,
}) => {
  return (
    <section className='filmCard'>
      <figure>
        <img src={currentFilm.Poster} alt={`${currentFilm.Title} poster`} />
      </figure>
      <article className='details'>
        <h2>{currentFilm.Title}</h2>
        <p><strong>Director:</strong> {currentFilm.Director}</p>
        <p><strong>Actors:</strong> {currentFilm.Actors}</p>
        <p><strong>Genre:</strong> {currentFilm.Genre}</p>
        <p><strong>Released:</strong> {currentFilm.Released}</p>
      </article>
      <article className='plot'>{currentFilm.Plot}</article>
      <aside className='icons'>
        {onWatchList || onSeenItList ? (
          <ImCross onClick={removeFromStorage} style={{ fontSize: '40px', cursor: 'pointer' }} />
        ) : (
          <>
            <CgPlayListAdd onClick={addToWatchList} style={{ fontSize: '50px', cursor: 'pointer' }} />
            <IoEyeOutline onClick={addToSeenItList} style={{ fontSize: '50px', cursor: 'pointer' }} />
          </>
        )}
      </aside>
    </section>
  );
};

export default FilmCard;