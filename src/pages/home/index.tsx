import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Layout } from "../../components"
import { Cards, Carrousel } from "../../components/common"
// import { getAllUpComing } from '../../services'
import { withAuth } from "../../hoc"
import { getAllUpComing, getAllPopular, getAllTopRated } from "../../services/movies"

  

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);


    useEffect(() => {
        getAllUpComing().then(response => setMovies(response.results))
        getAllPopular().then(response => setPopular(response.results))
        getAllTopRated().then(response => setTopRated(response.results))
    }, []);

    return (
        <Layout>
            <Container fluid="md">
                <Carrousel items={movies} />
                <h4>Peliculas Populares:</h4>
                <Cards items={popular}/>
                <h4>Peliculas Mejor Calificadas:</h4>
                <Cards items={topRated}/>
            </Container>
        </Layout>
        // <Layout>
        //     <Container fluid="md">
        //         <Row>
        //             <Col md="auto">
        //             Popular:
        //             <PopularCarrousel /></Col>
        //         </Row>
        //         <Row>
        //             <Col md="auto">
        //             Top Rated Movies:
        //             <UpcomingCarrousel /></Col>
        //         </Row>
        //     </Container>
        // </Layout> 
    )
}

export const Home = withAuth(HomePage) 