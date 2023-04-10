import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesCards } from "../../../types";
import './styles.scss'

const Cards: FC<MoviesCards> = ({ items, text }) => {

    const navigate = useNavigate();

    const baseUrl = "https://image.tmdb.org/t/p/original"
    return(
        <div className="scroll">
            <h6 className="title">{text}</h6>
            <div className="row pb-4">{items?.map((item: any) =>
                <img className="col card-block" key={item.id} onClick={() => navigate(`/movie/${item.id}`)}
                    src={`${baseUrl + item.poster_path}`}
                    alt="First slide"
                />
            )}
            </div>
        </div>
    )

}

export { Cards }