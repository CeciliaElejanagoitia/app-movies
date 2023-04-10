import { useState, useEffect } from "react";
import { Grid, Layout} from "../../components"
import { withAuth } from "../../hoc";
import { getAllPopular } from "../../services/movies";
import { Container } from "react-bootstrap";

const PopularPage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllPopular().then(response => setMovies(response.results))
    }, [])

    return(
        <Layout>
            <Container fluid="md">
                <Grid items={movies} text={"Peliculas Populares"}/>
            </Container>
        </Layout>
    )
}

export const Popular = withAuth(PopularPage) 