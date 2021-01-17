import React from "react";
import {Col, Row, Container} from "react-bootstrap/"

import AnalysisPersonal from "../components/analysisPersonal.js";
import AnalysisCard from "../components/locationCard.js";
import ContactCard from "../components/contactCard.js";
import TextStatsCard from "../components/textStatsCard.js";
import WordCloudCard from "../components/wordCloudCard";
import "./analysis.css"
import axios from "axios";

export default function Analysis() {
    const data = JSON.parse(
    `{
        "UUID": "2984491564600",
        "breaches": [],
        "email": "facebook@sunnyzuo.com",
        "entities": {
            "Address": [],
            "Location": [
                "Europe",
                "UK",
                "Ontario",
                "Canada",
                "Canada",
                "Alberta",
                "Alberta",
                "US"
            ],
            "Phone Number": [
                "203-492-3049",
                "16-18-18-38",
                "100664794",
                "18-22-22-42",
                "18-22-22-42",
                "16-19-19-39",
                "16-16-16-36",
                "16384002"
            ]
        },
        "fullName": "Sunny Zuo",
        "readingLevel": 65.08179245283019,
        "sentiment": [
            [
                0.21600000000000003,
                0.7020000000000001,
                0.08199999999999999
            ],
            [
                0,
                1,
                0
            ],
            [
                0,
                1,
                0
            ],
            [
                0.516842105263158,
                0.25842105263157894,
                0.22473684210526312
            ],
            [
                0.49105263157894735,
                0.23947368421052637,
                0.26947368421052625
            ],
            [
                0.3977777777777778,
                0.23666666666666666,
                0.3655555555555556
            ],
            [
                0.306875,
                0.3868749999999999,
                0.30625
            ],
            [
                0.28928571428571426,
                0.3757142857142857,
                0.3349999999999999
            ],
            [
                0.22200000000000003,
                0.554,
                0.22400000000000003
            ],
            [
                0.34,
                0.355,
                0.305
            ],
            [
                0.6166666666666666,
                0.14,
                0.24333333333333337
            ],
            [
                0.11,
                0.7,
                0.19
            ]
        ],
        "stringLength": 176.5943396226415,
        "wordCloudLink": "2984491564600.jpg"
    }`)
    
    const postDateReq = await axios({
        method: 'post',
        url: 'https://query.dropbase.io/npiopgkMCaSPaMjFwo8Yn5/data?select=hour,dayofweek&uuid=eq.' + data["UUID"],
        data: {
            "profileLink": props.location.state.facebook,
            "accessCode": response["accessToken"],
            "profileID": response["id"]
        }
    })

    return (
        <div className="text-center">
            <h1>Hello, {data.fullName}</h1>
            <h3>Here's what we got on you.</h3>
            <br/>
            <Container style={{backgroundColor: '#f1f1f1'}}>
                <Row>
                    <Col><AnalysisCard addresses={data.entities["Address"]} locations={data.entities["Location"]}/></Col>
                    <Col><ContactCard email={data.email} phoneNumbers={data.entities["Phone Number"]}/></Col>
                </Row>
                <Row>
                    <Col><WordCloudCard imageLink={data.wordCloudLink}/></Col>
                </Row>
            </Container>
        </div>
    )
}
