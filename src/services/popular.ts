import { mapToArray } from "../helpers/mapToArray"
import { Movie } from "../types"
import { apiMovies } from "../utils/axios"

const getAll = async () => {
    const response = await apiMovies.get('/movie/popular')
    return mapToArray<Movie>(response.data.results)
}

export const servicesPopular = { getAll }