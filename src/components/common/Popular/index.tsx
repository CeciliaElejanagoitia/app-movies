import { Card } from "react-bootstrap"
import { FC } from "react"
import { Movie } from "../../../types";

const Popular: FC<Movie> = ({ title, overview, poster_path }) => {

    const baseUrl = "https://image.tmdb.org/t/p/";
    const widthImg = "w1280"
    return (
      <Card style={{ width: '30vh' }}>
        <Card.Img variant="top" src={baseUrl+ widthImg + poster_path}></Card.Img>
        <Card.Body style={{ color: 'black' }}>
            <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      );
}
export { Popular }