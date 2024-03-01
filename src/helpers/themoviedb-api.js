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

// async function requestImages(query, page = 1, perPage = 12) {
//   const data = await axiosInstance.get('/', {
//     params: {
//       key: API_KEY,
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page,
//       per_page: perPage,
//     },
//   });

//   return data;
// }

const themoviedbApi = { fetchTrendingMovies };

export default themoviedbApi;
