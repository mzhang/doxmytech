import React from "react";
import {Col, Row, Container} from "react-bootstrap/"
import AnalysisPersonal from "../components/analysisPersonal.js";
import AnalysisCard from "../components/locationCard.js";
import ContactCard from "../components/contactCard.js";
import TextStatsCard from "../components/textStatsCard.js";
import Linegraph from "../components/linegraph.js"
import "./analysis.css"

export default function Analysis() {
    return (
        <div className="text-center">
            <h1>Hello, John Smith.</h1>
            <h3>Here's what we got on you.</h3>
            <br/>
            <Container style={{backgroundColor: '#f1f1f1'}}>
                <Row>
                    <Col><AnalysisPersonal name={"epic eric"} number={"7051231234"} address={"interwebs"} location={"danada"} email={"noN00bs@yahoo.ca"}/></Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col><AnalysisCard address={"interwebs"} location={"danada"}/></Col>
                    <Col><ContactCard email={"noN00bs@yahoo.ca"} number={"7051231234"}/></Col>
                    <Col>3 of 3</Col>
                </Row><Row>
                    <Col><AnalysisCard address={"interwebs"} location={"danada"}/></Col>
                    <Col><TextStatsCard averageChars={"123"} readingLevel={"7051231234"}/></Col>
                    <Col>3 of 3</Col>
                </Row>
                
                <Linegraph />
            </Container>


        </div>
    )
}
