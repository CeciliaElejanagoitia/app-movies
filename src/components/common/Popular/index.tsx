import { Card } from "react-bootstrap"
import { FC, useEffect, useState } from "react"
import { Movie } from "../../../types";
import { useNavigate } from "react-router-dom";
import { apiMovies } from "../../../utils/axios";
import { mapToArray } from "../../../helpers/mapToArray";

const Popular: FC<Movie> = ({ id, title, poster_path }) => {


  const navigate = useNavigate();


  const baseUrl = "https://image.tmdb.org/t/p/";
  const widthImg = "w1280"
  return (
    <Card onClick={() => navigate(`/movie/${id}`)} style={{ width: '30vh' }}>
      <Card.Img variant="top" src={baseUrl+ widthImg + poster_path}></Card.Img>
      <Card.Body style={{ color: 'black' }}>
          <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export { Popular }