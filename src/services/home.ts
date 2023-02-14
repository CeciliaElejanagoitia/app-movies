// import { SignUpForm } from "../types"}
import { apiMovies } from "../utils/axios"

const add = async () => {

    const response = await apiMovies.post('/users.json')
    return response.data

}

const getAll = async () => {

    const response = await apiMovies.get('/users.json')
    return response.data

}

export const servicesHome = { add, getAll }