import { Navbar as NavbarBTS, Container, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import './styles.scss'

const Navbar = () => {
    return(
      <NavbarBTS bg="text-light" expand="lg" className="mi-navbar" >
            <Container fluid>
                <NavbarBTS.Brand href="#home">Movies app</NavbarBTS.Brand>
                <NavbarBTS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBTS.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/signup">SingUp</NavLink>
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                    <NavLink className="nav-link" to="/upcoming">Upcoming</NavLink>
                    <NavLink className="nav-link" to="/popular">Popular</NavLink>
                    <NavLink className="nav-link" to="/search">Buscar</NavLink>
                </Nav>
                </NavbarBTS.Collapse>
            </Container>
        </NavbarBTS> 
    )
}

export { Navbar }