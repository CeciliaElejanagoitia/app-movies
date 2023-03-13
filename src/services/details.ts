import { mapToArray } from "../helpers/mapToArray"
import { Movie } from "../types"
import { apiMovies } from "../utils/axios"


const get = async (): Promise<Movie[]> => {
    const response= await apiMovies.get('/movie/id')
    return mapToArray(response.data)
}

const getById = async (id: string) => {
    const response = await apiMovies.get(`/movie/${id}`);
    return response.data;
  }

export { get, getById }