import { createContext, FC, ReactNode, useState } from "react";
import { Movie } from '../../types'

type ContextType = { movies: Movie[], loadMovies: (m: Movie[]) => void }
type ProviderType = { children: ReactNode }


const StoreContext = createContext<ContextType>({
    movies: [],
    loadMovies: (m: Movie[]) => undefined
})

const StoreProvider: FC<ProviderType> = ({ children }) => {

    const [movies, setMovies] = useState<Movie[]>([])

    const loadMovies = (m: Movie[]) => {
        setMovies(m)
    }
    
    return (
        <StoreContext.Provider value={{ movies, loadMovies }}>
            {children}
        </StoreContext.Provider>
    )

}

export { StoreContext, StoreProvider }