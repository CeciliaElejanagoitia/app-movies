import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Details, Layout } from "../../components"
import { withAuth } from "../../hoc"
import { getById } from "../../services/movies"

const MovieDetailsPage = ({ }) => {
    const { id } = useParams();
    const [detail, setDetails] = useState([])

    useEffect(() => {
        getById(id || "").then(response => setDetails(response))
    }, [])


    return (
        <Layout>
            <Details items={detail}/> 
        </Layout>
    )
}

export const MovieDetails = withAuth(MovieDetailsPage)  