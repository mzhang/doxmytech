import React from "react";
import { Row, Card, Image } from "react-bootstrap"

export default function SingleBreachView(props) {
    return (
        <div>
            <Card>
                <Card.Header style={{ backgroundColor: "#191919" }}><Image src={props.data.LogoPath} style={{ height: "25px" }} /></Card.Header>
                <Card.Body>
                    <Card.Title>{props.data.Name} on {props.data.BreachDate}</Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: props.data.Description }} />
                    <Card.Text><b>What was leaked:</b> {props.data.DataClasses.join(", ")}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}