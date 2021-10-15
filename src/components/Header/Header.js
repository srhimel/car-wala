import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand">Car Wala</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                        {user?.email && <Nav.Link onClick={logOut} className="btn btn-primary text-light">Logout  </Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;