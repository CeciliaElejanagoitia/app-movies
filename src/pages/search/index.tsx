import { Layout } from "../../components"
import { withAuth } from "../../hoc"

const SearchPage = () => {
    return(
        <Layout>
            Pagina buscar
        </Layout>
    )
}

export const Search = withAuth(SearchPage) 