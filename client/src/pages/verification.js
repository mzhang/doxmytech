import React, { useState } from "react";
import "./verification.css"

import Card from "react-bootstrap/Card"
import FacebookLogin from 'react-facebook-login';
import Button from "react-bootstrap/Button"

export default function Verification() {
    const [fbData, setFBData] = useState('');
    const responseFacebook = (response) => {
        if (response.accessToken) setFBData(response);
        console.log(response);
    }


    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Hold on...</h1>
                <h2>We need your permission before continuing.</h2>

                <Card className="text-center top-margins">
                    <Card.Header>Facebook</Card.Header>
                    <Card.Body style={{ display: (fbData) ? 'none' : 'block'}}>

                        <FacebookLogin
                            appId="440751897337373"
                            fields="id"
                            scope="public_profile"
                            autoLoad={true}
                            callback={responseFacebook} />
                        <Card.Text>
                            We only access publicly available info and you can remove access later.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="text-center top-margins">
                    <Card.Header>Twitter</Card.Header>
                    <Card.Body>

                        <Card.Text>
                            Add the line <code>DoxMy.Tech</code> to your Twitter bio to give us permission!
                        </Card.Text>

                        <Button variant="primary" size="lg" active>Verify my Twitter bio</Button>

                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}
