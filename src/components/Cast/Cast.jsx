import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import themoviedbApi from '../../helpers/themoviedb-api';
import Loader from '../../components/Loader/Loader';
import css from './Cast.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);

      try {
        const response = await themoviedbApi.fetchMovieCast(movieId);
        setCast(response.data.cast);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {loading && <Loader size={40} color="#00BFFF" />}
      {error && (
        <div className={css.error}>An error occurred: {error.message}</div>
      )}
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id} className={css.item}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : defaultImg
            }
            alt={name}
            className={css.image}
          />
          <h3 className={css.name}>{name}</h3>
          <p className={css.character}>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
