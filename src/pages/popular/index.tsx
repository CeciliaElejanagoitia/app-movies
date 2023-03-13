import { Col, Container, Row } from "react-bootstrap"
import { Layout, Popular as PopularView } from "../../components"
import { withAuth } from "../../hoc"
import { useMoviesPop } from "../../hook"

const PopularPage = () => {
    const { movies } = useMoviesPop()
    return(
        <Layout>
            <Container fluid className="p-4">
                <Row>
                    {
                        movies.map(movie => (
                            <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
                                <PopularView{ ...movie } />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Layout>
    )
}

export const Popular = withAuth(PopularPage) 