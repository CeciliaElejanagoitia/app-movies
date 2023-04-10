import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Layout } from "../../components"
import { Grid } from "../../components/common"
import { withAuth } from "../../hoc"
import { getAllTopRated } from "../../services/movies"

const TopRatedPage = () => {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllTopRated().then(response => setMovies(response.results))
    }, [])

    return(
        <Layout>
            <Container fluid="md">
                <Grid items={movies} text={"Mejor Calificadas"} />
            </Container>
        </Layout>
    )
}

export const TopRated = withAuth(TopRatedPage)  