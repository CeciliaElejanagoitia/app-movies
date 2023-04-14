import { apiMovies } from "../utils/axios"


const getAllPopular = async (page?: string) => {
  const response = await apiMovies.get('/movie/popular', {params: {page}})
  return response.data
}

const getAllUpComing = async () => {
  const response = await apiMovies.get('/movie/upcoming')
  return response.data
}

const getAllTopRated = async (page?: string) => {
  const response = await apiMovies.get('/movie/top_rated', {params: {page}});
  return response.data;
};

const getById = async (id: string) => {
    const response = await apiMovies.get(`/movie/${id}`);
    return response.data;
}

const getBySearch = async (params: {query?: string, page?: string}) => {
  const response = await apiMovies.get('/search/movie', {
    params
  });
  return response.data;

}
 


export { getAllPopular, getAllUpComing, getAllTopRated, getById, getBySearch }