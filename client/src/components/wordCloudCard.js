import React from "react";
import { Card, Image } from "react-bootstrap"

export default function card(props) {
    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <h2>Ever wanted to visualize your speech?</h2>
            </Card.Header>
            <Card.Body>
                <Image src={`${process.env.REACT_APP_URL}/image/${props.imageLink}`}/>
            </Card.Body>
        </Card></div>)
}