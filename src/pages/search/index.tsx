import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Layout, Paginations, SearchForm } from "../../components"
import { withAuth } from "../../hoc"
import { getBySearch } from "../../services/movies";
import { Container } from "react-bootstrap";

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(Number)
    const [params, setParams] = useState({ page: '1', query: '' });
    const [searchParams, setSearchParams] = useSearchParams()
    

    useEffect(() => {
        setSearchParams(params);
    }, [params])

    useEffect(() => {
        const page = searchParams.get('page')
        const query = searchParams.get('query')

        getBySearch({ query: query || "", page: page || "" }).then((response) => {
            setMovies(response.results)
            setTotalPage(response.total_pages)
        })
    }, [searchParams])

    const setSearchQuery = (text: string) => {
        setParams(prevState => ({ ...prevState, query: text}))
    }

    const setQuery = (page: string) => {
        setParams(prevState => ({ ...prevState, page: page}))
    }

    return(
        <Layout>
            <Container fluid="md">
            <div>
                <SearchForm onSearch={setSearchQuery} />
                <Grid items={movies} />
                {movies.length <= 0 && 'no hay resultados posibles'}
                <Paginations totalPages={totalPage} onClick={setQuery}/>
            </div>
            </Container>
        </Layout>
    )
}

export const Search = withAuth(SearchPage)