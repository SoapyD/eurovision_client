import { Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"


const Header = () => {

  const [userContext, setUserContext] = useContext(UserContext)  

  return !userContext.token ? (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/room">Room</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>                    
                </Nav>
            </Container>
        </Navbar>

        <Outlet />
    </>
  ) : (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/room">Room</Nav.Link>   
                    <Nav.Link href="/logout">LogOut</Nav.Link>                                        
                </Nav>
            </Container>
        </Navbar>

        <Outlet />
    </>    
  )
};

export default Header;