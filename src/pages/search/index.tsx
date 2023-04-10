import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Layout, SearchForm } from "../../components"
import { withAuth } from "../../hoc"
import { getBySearch } from "../../services/movies";

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useState({ query: '' });
    const [searchParams, setSearchParams] = useSearchParams()
    

    useEffect(() => {
        setSearchParams(params);
    }, [params])

    useEffect(() => {
        const query = searchParams.get('query')

        getBySearch({ query: query || "" }).then((response) => {
            setMovies(response.results)
        })
    }, [searchParams])

    const setSearchQuery = (text: string) => {
        setParams(prevState => ({ ...prevState, query: text}))
    }

    return(
        <Layout>
            <div>
                <SearchForm onSearch={setSearchQuery} />
                <Grid items={movies} />
                {movies.length <= 0 && 'no hay resultados posibles'}
            </div>buscar
        </Layout>
    )
}

export const Search = withAuth(SearchPage) 