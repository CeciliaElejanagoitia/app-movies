import { createContext, useState } from "react";

const StoreContext = createContext({
    movies: [],
    loadMovies: (m) => undefined
})

const StoreProvider = ({ children }) => {

    const [movies, setMovies] = useState([])

    const loadMovies = (m) => {
        setMovies(m)
    }
    
    return (
        <StoreContext.Provider value={{ movies, loadMovies }}>
            {children}
        </StoreContext.Provider>
    )

}

export { StoreContext, StoreProvider }