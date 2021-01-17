import React from "react";
import {Col, Row, Container} from "react-bootstrap/"

import AnalysisCard from "../components/locationCard.js";
import ContactCard from "../components/contactCard.js";
import TextStatsCard from "../components/textStatsCard.js";
import LinegraphCard from "../components/linegraphCard.js"
import WordCloudCard from "../components/wordCloudCard";
import BreachCard from "../components/breachCard";
import HourFrequencyCard from "../components/hourFrequencyCard.js"
import WeekDayFrequencyCard from "../components/weekDayFrequencyCard.js"
import "./analysis.css"

export default function Analysis(props) {
    const data = props.location.state

    return (
        <div className="text-center">
            <h1>Hello, {data.fullName}</h1>
            <h3>Here's what we got on you.</h3>
            <br/>
            <Container style={{paddingBottom: "1em", backgroundColor: '#f1f1f1'}}>
                <Row>
                    <Col><AnalysisCard addresses={data.entities["Address"]} locations={data.entities["Location"]}/></Col>
                    <Col><ContactCard email={data.email} phoneNumbers={data.entities["Phone Number"]}/></Col>
                    <Col><TextStatsCard rawReadingLevel={data.readingLevel} averageChars={data.stringLength}/></Col>
                </Row>

                <LinegraphCard data={data.sentiment}/>
                <WeekDayFrequencyCard data={data.weekDayCount}/>
                <HourFrequencyCard data={data.hourCount}/>

                <Row>
                    <Col><WordCloudCard imageLink={data.wordCloudLink}/></Col>
                </Row>
                <Row>
                    <Col><BreachCard data={data.breaches}/></Col>
                </Row>
            </Container>
        </div>
    )
}
