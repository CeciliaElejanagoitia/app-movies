import { mapToArray } from "../helpers/mapToArray"
import { UpComingType } from "../types"
import { apiMovies } from "../utils/axios"

const getAll = async () => {
    const response= await apiMovies.get('/movie/top_rated')
    return mapToArray<UpComingType>(response.data)
}

export const servicesUpcoming = {getAll}