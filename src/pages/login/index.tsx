import { Layout } from "../../components"
import { withAuth } from "../../hoc"

const LoginPage = () => {

    return (

        <Layout>
            login
        </Layout>

    )

}

export const Login = withAuth(LoginPage)