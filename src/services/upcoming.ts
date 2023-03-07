import { mapToArray } from "../helpers/mapToArray"
import { Movie } from "../types"
import { apiMovies } from "../utils/axios"


const getAll = async () => {
    const response = await apiMovies.get('/movie/now_playing')
    return mapToArray<Movie>(response.data.results)
}

export const servicesUpComing = { getAll }