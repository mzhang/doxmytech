import React from "react";
import {Card, Col, Row, Container} from "react-bootstrap/"
import TextLoop from "react-text-loop"

export default function analysisPersonal(props) {

    return (<div><Card className="text-center">
        <Card.Body>
            <Container>
                <Row>
                    <Col md>Your full name:</Col>
                    <Col md>{props.name}</Col>
                </Row>
                <Row>
                    <Col md>Your phone number:</Col>
                    <Col md><TextLoop children={props.phoneNumbers} interval={1000}/></Col>
                </Row>
                <Row>
                    <Col md>Your address:</Col>
                    <Col md>{props.address}, {props.location}</Col>
                </Row>
                <Row>
                    <Col md>Your Email:</Col>
                    <Col md>{props.email}</Col>
                </Row>
            </Container>
        
        </Card.Body>
    </Card>
    </div>)

}

