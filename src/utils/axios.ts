import axios from 'axios'

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key : "0bce2b3619ac231ad6ce364b6d8015ab"
    }
})

const api = axios.create({
    baseURL: 'https://app-movies-b4b9b-default-rtdb.firebaseio.com/'
})

export { apiMovies, api }