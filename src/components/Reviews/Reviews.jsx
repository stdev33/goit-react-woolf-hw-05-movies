import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import themoviedbApi from '../../helpers/themoviedb-api';
import Loader from '../../components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);

      try {
        const response = await themoviedbApi.fetchMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader size={40} color="#00BFFF" />}
      {error && (
        <div className={css.error}>An error occurred: {error.message}</div>
      )}
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.item}>
              <h4 className={css.author}>{author}</h4>
              <p className={css.content}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
