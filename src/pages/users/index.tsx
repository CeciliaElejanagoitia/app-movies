import { Layout } from "../../components"
import { withAuth } from "../../hoc"

const UsersPage = () => {
    return(
        <Layout>
            Users
        </Layout>
    )
}

export const User = withAuth(UsersPage)  