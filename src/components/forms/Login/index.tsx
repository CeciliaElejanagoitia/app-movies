import { Button, Col, Container, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useMe } from "../../../hook";
import { LoginForm } from "../../../types";




const Login = () => {

    const { register, handleSubmit } = useForm<LoginForm>();
    const { login, me } = useMe()

    const onSubmit = (data: LoginForm) => {
        login(data)
    }
 
    return(
        <Container style={{ margin: '0' }}>
            {/* <Row> */}
                <Col md={4}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Ingresar email" 
                            { ...register('email')} />
                            <Form.Text className="text-secondary">
                                No compartiremos sus datos con nadie.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control 
                            type="pass" 
                            placeholder="Ingresar contraseña" 
                            { ...register('pass')} />
                            <Form.Text className="text-secondary">
                                No compartiremos sus datos con nadie.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar sesión
                        </Button>
                    </Form>
                </Col>
            {/* </Row> */}
        </Container>
    )
}

export { Login }