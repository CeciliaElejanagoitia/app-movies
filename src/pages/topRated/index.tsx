import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Layout } from "../../components"
import { Grid, Paginations } from "../../components/common"
import { withAuth } from "../../hoc"
import { getAllTopRated } from "../../services/movies"
import { useSearchParams } from "react-router-dom"

const TopRatedPage = () => {
    
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(Number);
    const [params, setParams] = useState({ page: '1' });
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams(params);
    }, [params])

    useEffect(() => {
        getAllTopRated(searchParams.get('page') || '').then(response => {
            setMovies(response.results)
            setTotalPage(response.total_pages) 
        })
    }, [searchParams])

    const setQuery = (page: string) => {
        setParams(prevState => ({ ...prevState, page: page}))
    }

    return(
        <Layout>
            <Container fluid="md">
                <Grid items={movies} text={"Mejor Calificadas"} />
                <Paginations totalPages={totalPage} onClick={setQuery}/>
            </Container>
        </Layout>
    )
}

export const TopRated = withAuth(TopRatedPage)  