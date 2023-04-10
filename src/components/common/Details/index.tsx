import './styles.scss'
import { FC } from "react";
import { Detail } from "./type";

const Details: FC<Detail> = ( { items } ) => {


        const baseUrl = "https://image.tmdb.org/t/p/";
        const widthImg = "w1280"
    return (
            <div className="container" >
                <div className="img">
                    <img
                        src={baseUrl + widthImg + items.poster_path}
                        alt="First slide"
                    />
                </div>
                <div className="text">
                    <h2 className="title">{items.title}</h2>
                    <p>{items.overview}</p>
                </div>
            </div>
    )
}

export {Details}