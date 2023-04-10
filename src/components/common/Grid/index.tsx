import { FC } from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss';
import { MoviesCards } from "../../../types";

const Grid: FC<MoviesCards> = ({ items, text }) => {

    const navigate = useNavigate();

    const baseUrl = "https://image.tmdb.org/t/p/original"
    return (
        <div className="grid">
            <h6 className="title">{text}</h6>
            <div className="row pb-4">{items?.map((item: any) =>
                <img className="col card-block" key={item.id} onClick={() => navigate(`/movie/${item.id}`)}
                    src={`${baseUrl + item.poster_path}`}
                    alt="Poster movie"
                />
            )}
            </div>
        </div>
    );
}

export { Grid }