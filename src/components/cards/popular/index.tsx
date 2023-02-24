import { useState, useEffect } from "react"
import { Carousel } from "react-bootstrap"
import { apiMovies } from "../../../utils/axios"

const PopularCarrousel = () => {
    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
    }, [])
    const baseUrl = "https://image.tmdb.org/t/p/"
    const widthImg = "w1280"
    return (
        <Carousel>
          {
            movies.map(movie => (
            <Carousel.Item key={movie.id}>
            <img
              className=" w-50"
              src={baseUrl + widthImg + movie.backdrop_path}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>{movie.title}</h5>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>
        
  );
}
export { PopularCarrousel }