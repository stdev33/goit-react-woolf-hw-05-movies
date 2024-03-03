import React, { useEffect, useState } from 'react';
import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import themoviedbApi from '../../helpers/themoviedb-api';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);

      try {
        const response = await themoviedbApi.fetchMovieDetails(movieId);
        setMovie(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <div>
      {loading && <Loader size={80} color="#00BFFF" />}
      {error && (
        <div className={css.Error}>An error occurred: {error.message}</div>
      )}
      {movie && (
        <>
          <button className={css.backButton} onClick={handleGoBack}>
            Back
          </button>
          <section className={css.detailsContainer}>
            <div className={css.imageContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className={css.movieInfo}>
              <h2 className={css.movieTitle}>{movie.title}</h2>
              <p className={css.movieScore}>
                User Score: {Math.round(movie.vote_average * 10)}%
              </p>
              <h3>Overview</h3>
              <p className={css.movieOverview}>{movie.overview}</p>
              <h3>Genres</h3>
              <p className={css.movieGenres}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </section>
          <section className={css.additionalInfo}>
            <h3>Additional information</h3>
            <ul className={css.additionalLinks}>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </section>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
