import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { Layout } from "../../components"
import { SignUpForm } from "../../components/forms"
import { withAuth } from "../../hoc"

const SignUpPage = () => {

    const navigate = useNavigate()

    return(
        <Layout>
            <div className="signup">
                <Button
                    type="button"
                    variant="btn-tabla m-2"
                    onClick={() => navigate('/login')}
                ></Button>
            </div>
            <SignUpForm />
        </Layout>
    )
}

export const SignUp = withAuth(SignUpPage)