import { useState, useEffect } from "react";
import { Grid, Layout, Paginations} from "../../components"
import { withAuth } from "../../hoc";
import { getAllPopular } from "../../services/movies";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const PopularPage = () => {

    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(Number);
    const [params, setParams] = useState({ page: '1' });
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams(params);
    }, [params])

    useEffect(() => {
        getAllPopular(searchParams.get('page') || '').then(response => {
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
                <Grid items={movies} text={"Peliculas Populares"}/>
                <Paginations totalPages={totalPage} onClick={setQuery}/>
            </Container>
        </Layout>
    )
}

export const Popular = withAuth(PopularPage) 