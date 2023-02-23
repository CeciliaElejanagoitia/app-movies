import { useEffect, useState } from "react"
import { Layout } from "../../components"
import { servicesUpcoming } from "../../services/upcoming"
import { UpComingType } from "../../types"

const UpComing = () => {

    const [movies, setMovies] = useState<UpComingType[]>([])
    useEffect(() => {
        servicesUpcoming.getAll().then(data => setMovies(data))
    })

    return(
        <Layout>
            {
                movies.map(movie => (
                  <UpComing />  
                ))
            }
            
        </Layout>
    )
}

export { UpComing } 