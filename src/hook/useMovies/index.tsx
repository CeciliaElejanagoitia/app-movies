import { useContext, useEffect } from "react"
import { StoreContext } from "../../contexts"
import { servicesUpComing } from "../../services/upcoming"

const useMovies = () => {

    const { movies, loadMovies } = useContext(StoreContext)

    useEffect(() => {
        servicesUpComing.getAll().then(response => loadMovies(response))
    }, [movies, loadMovies])

    return { movies }

}

export { useMovies }