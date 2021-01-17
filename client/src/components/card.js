import React from "react";
import Card from "react-bootstrap/Card"
import FacebookLogin from 'react-facebook-login';
import Button from "react-bootstrap/Button"
import { IoShieldCheckmark } from "react-icons/io5";

export function FacebookCard(props) {
    return (<div><Card className="text-center top-margins">
    <Card.Header>Facebook</Card.Header>
    <Card.Body style={{ display: (props.fbData) ? 'none' : 'block'}}>

        <FacebookLogin
            appId="440751897337373"
            fields="id"
            scope="public_profile,email"
            autoLoad={true}
            callback={props.responseFacebook} />
        <Card.Text>
            We only access publicly available info and you can remove access later.
        </Card.Text>
    </Card.Body>
</Card></div>)
}

export function TwitterCard(props) {
    return (<div><Card className="text-center top-margins">
    <Card.Header>Twitter</Card.Header>
    <Card.Body style={{ display: (props.twitterData) ? 'none' : 'block'}}>

        <Card.Text>
            Add the line <code>DoxMyTech</code> to your Twitter bio to give us permission!
        </Card.Text>

        <Button variant="primary" size="lg" onClick={props.responseTwitter} active>Verify my Twitter bio</Button>

    </Card.Body>
</Card></div>)
}

export function SuccessCard(props) {
    return (<div><Card className="text-center top-margins">
    <Card.Header>{props.title}</Card.Header>
    <Card.Body>

        <IoShieldCheckmark style={{fontSize: "2.7em", color: "#3b5998", marginRight: "5px"}}/>

    </Card.Body>
</Card></div>)
}