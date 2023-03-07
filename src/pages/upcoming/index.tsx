import { Col, Container, Row } from "react-bootstrap"
import { Layout, UpComing as UpComingView } from "../../components"
import { useMovies } from "../../hook"

const UpComing = () => {
    const { movies } = useMovies()
    return(
        <Layout>
            <Container fluid className="p-4">
                <Row>
                    {
                        movies.map(movie => (
                            <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
                                <UpComingView { ...movie } />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Layout>
    )
}

export { UpComing }  