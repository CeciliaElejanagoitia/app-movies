import { Carousel} from 'react-bootstrap';
// import { CarouselItem } 'react-bootstrap/CarouselItem';
// import { CarouselCaption } 'react-bootstrap/CarouselCaption';
import { useState, useEffect } from 'react';
import { apiMovies } from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const UpcomingCarrousel = () => {
    const [movies, setMovies] = useState<any[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        apiMovies.get('/movie/top_rated').then(response => setMovies(response.data.results))
    }, [])
    const baseUrl = "https://image.tmdb.org/t/p/"
    const widthImg = "w1280"
    return (
        <Carousel>
          {
            movies.map(movie => (
            <Carousel.Item key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            <img
              // className="w-10"
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

export { UpcomingCarrousel }