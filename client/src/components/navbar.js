import React from "react";
import { Link } from "@reach/router";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Navbar() {
    return (
        <>
            <Container>
                <BootstrapNavbar bg="primary" variant="dark">
                <Link to="/">
                    <BootstrapNavbar.Brand>DoxMy.tech</BootstrapNavbar.Brand>
                </Link>
                
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/privacy">Privacy</Nav.Link>                  
                </Nav>
                </BootstrapNavbar>
            </Container>
        </>
    )
}