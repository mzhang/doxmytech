import React from "react";
import "./verification.css"

import Card from "react-bootstrap/Card"
import BootstrapButton from "react-bootstrap/Button"

import { FacebookProvider, Login } from 'react-facebook';

export default function Verification() {
    const handleResponse = (data) => {
        console.log(data);
    }
     
    const handleError = (error) => {
        this.setState({ error });
    }
    
    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Hold on...</h1>
                <h2>We need your permission before continuing.</h2>

                <Card className="text-center"> 
                    <Card.Header>Facebook</Card.Header>
                    <Card.Body>

                    <FacebookProvider appId="123456789">
                        <Login
                            scope="email"
                            onCompleted={() => handleResponse}
                            onError={() => handleError}
                            >
                            {({ loading, handleClick, error, data }) => (
                                <BootstrapButton onClick={handleClick} style={{marginBottom: "20px"}}>
                                    Login via Facebook
                                </BootstrapButton>
                            )}

                        </Login>
                    </FacebookProvider>

                        <Card.Text>
                            We only access publicly available info and you can remove access later.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}