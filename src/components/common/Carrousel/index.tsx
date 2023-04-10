import { FC } from "react";
import { Carousel } from "react-bootstrap";
import { MoviesCards } from "../../../types";
import './styles.scss'

const Carrousel: FC<MoviesCards> = ({ items }) => {

    const baseUrl = "https://image.tmdb.org/t/p/original"

    return(
        <Carousel fade>
            {items?.map((item: any) => (
                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100 card-img-top "
                        src={`${baseUrl + item.backdrop_path}`}
                        alt="Poster movie"
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export { Carrousel }