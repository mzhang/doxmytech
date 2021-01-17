import React, { useState } from "react";
import "./verification.css"

import Card from "react-bootstrap/Card"
import FacebookLogin from 'react-facebook-login';
import Button from "react-bootstrap/Button"
import axios from "axios";

//import NodeFetch from "node-fetch";

export default function Verification(props) {
    const [fbData, setFBData] = useState('');
    const [twitterData, setTwitterData] = useState('');

    const responseFacebook = async (response) => {
        if (response.accessToken) setFBData(response);
        console.log(response["id"])
        console.log(response["accessToken"])

        const res = await axios({
            method: 'post',
            url: 'http://localhost:5000/facebookCheck',
            data: {
                "profileLink": props.location.state.facebook,
                "accessCode": response["accessToken"],
                "profileID": response["id"]
            }
        })

        console.log(res.data);
    }

    const responseTwitter = async () => {
        const res = await axios({
            method: 'get',
            url: 'http://localhost:5000/twitterBio/' + props.location.state.twitter
        })

        var bio = res.data;
        console.log(bio)
        if (bio.toLowerCase() === "doxmytech") {
            setTwitterData("twitter bio is correct");
        }
    }
    
    // You can access the user's twitter/facebook/reddit using props.location.state
    // For example, props.location.state.reddit gives the user's supposed reddit username
    
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
                            scope="public_profile,email"
                            autoLoad={true}
                            callback={responseFacebook} />
                        <Card.Text>
                            We only access publicly available info and you can remove access later.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="text-center top-margins">
                    <Card.Header>Twitter</Card.Header>
                    <Card.Body style={{ display: (twitterData) ? 'none' : 'block'}}>

                        <Card.Text>
                            Add the line <code>DoxMyTech</code> to your Twitter bio to give us permission!
                        </Card.Text>

                        <Button variant="primary" size="lg" onClick={responseTwitter} active>Verify my Twitter bio</Button>

                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}
