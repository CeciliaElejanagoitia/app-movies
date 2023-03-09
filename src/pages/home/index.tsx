import { Col, Container, Row } from "react-bootstrap"
import { UpcomingCarrousel, Layout, PopularCarrousel } from "../../components"
import { withAuth } from "../../hoc"

  

const HomePage = () => {
    return (
        <Layout>
            <Container fluid="md">
                <Row>
                    <Col md="auto">
                    Popular:
                    <PopularCarrousel /></Col>
                </Row>
                <Row>
                    <Col md="auto">
                    Top Rated Movies:
                    <UpcomingCarrousel /></Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const Home = withAuth(HomePage) 