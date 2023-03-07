import { createContext, useState } from "react";

const StoreContext = createContext({
    movies: [],
    loadMovies: (t) => undefined
})

const StoreProvider = ({ children }) => {

    const [movies, setMovies] = useState([])

    const loadMovies = (t) => {
        setMovies(t)
    }
    
    return (
        <StoreContext.Provider value={{ movies, loadMovies }}>
            {children}
        </StoreContext.Provider>
    )

}

export { StoreContext, StoreProvider }