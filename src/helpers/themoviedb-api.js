import axios from 'axios';

const API_KEY = '6771e757581944322d46c2e737d343a7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.timeout = 3000;

const axiosInstance = axios.create();

async function fetchTrendingMovies(timeWindow = 'day', language = 'en-US') {
  const data = await axiosInstance.get(`/trending/movie/${timeWindow}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
}

async function searchMovies(
  query,
  page = 1,
  language = 'en-US',
  primaryReleaseYear = '',
  region = '',
  includeAdult = false
) {
  const data = await axiosInstance.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
      page,
      language,
      primary_release_year: primaryReleaseYear,
      region,
      include_adult: includeAdult,
    },
  });

  return data;
}

const themoviedbApi = { fetchTrendingMovies, searchMovies };

export default themoviedbApi;
