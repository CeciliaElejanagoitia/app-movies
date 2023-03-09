import { Col, Container, Row } from "react-bootstrap"
import { Layout, UpComing as UpComingView } from "../../components"
import { withAuth } from "../../hoc"
import { useMovies } from "../../hook"

const UpComingPage = () => {
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

export const UpComing = withAuth(UpComingPage)  