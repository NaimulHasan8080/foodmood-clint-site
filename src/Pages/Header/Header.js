import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import logo from './../../images/foodmood.png'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <img width="50" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/addFood">Add Food</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/myorders">My Orders</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/manageorders">Manage Orders</Nav.Link>
                        <Navbar.Text className="text-dark">
                            <a href="#login" className="text-warning fs-3 fw-bold text-decoration-none">{user?.displayName} </a>
                        </Navbar.Text>
                        {
                            (!user?.email) ?
                                <Nav.Link as={Link} className="btn btn-info text-white" to="/login">
                                    Login
                                </Nav.Link>
                                :
                                <button className="btn btn-danger text-white ms-1" onClick={logOut} variant="light"> Logout</button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;