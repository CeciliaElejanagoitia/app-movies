import { mapToArray } from "../helpers/mapToArray"
import { Movie } from "../types"
import { apiMovies } from "../utils/axios"


// const add = async (movie: Movie) => {

//     const response = await apiMovies.post('movie/top_rated', movie)
//     return response.data

// }

const getAll = async () => {
    const response = await apiMovies.get('/movie/top_rated')
    return mapToArray<Movie>(response.data.results)
}

export const servicesUpComing = { getAll }