import React from "react";
import "./verification.css"

import Card from "react-bootstrap/Card"
import FacebookLogin from 'react-facebook-login';


export default function Verification() {
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Hold on...</h1>
                <h2>We need your permission before continuing.</h2>

                <Card className="text-center"> 
                    <Card.Header>Facebook</Card.Header>
                    <Card.Body>

                        <FacebookLogin
                            appId="440751897337373"
                            fields="id"
                            scope="public_profile"
                            autoLoad={false}
                            callback={responseFacebook} />
                        <Card.Text>
                            We only access publicly available info and you can remove access later.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}