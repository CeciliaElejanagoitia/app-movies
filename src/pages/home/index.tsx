import { useEffect, useState } from "react"
import { Container} from "react-bootstrap"
import { Layout } from "../../components"
import { apiMovies } from "../../utils/axios"

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    // useEffect{() =>{
    //     apiMovies.get('/movie/top_rated').then(response => setMovies(response.data))
    // }, []}

    return(
        <Layout>
            <Container fluid className="p-4">
                
            </Container>
        </Layout>
    )
}

export { Home } 