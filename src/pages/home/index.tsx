import { UpcomingCarrousel, Layout, PopularCarrousel } from "../../components"

  

const Home = () => {
    return (
        <Layout>
            Popular:
            <PopularCarrousel />
            Top Rated Movies:
            <UpcomingCarrousel />
        </Layout>
    )
}

export { Home } 