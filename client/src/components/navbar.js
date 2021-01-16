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
                    <Link to="/about">
                        <p style={{color: "white"}}>About</p>
                    </Link>
                    <Link to="/privacy">
                    <p style={{color: "white"}}>Privacy</p>
                    </Link>                        
                </Nav>
                </BootstrapNavbar>
            </Container>
        </>
    )
}