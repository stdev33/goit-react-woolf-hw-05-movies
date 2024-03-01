import React from 'react';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieItem}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              className={css.movieImage}
            />
            <h2 className={css.movieTitle}>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
