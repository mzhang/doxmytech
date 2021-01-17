import React from "react";
import {Col, Row, Container} from "react-bootstrap/"

import AnalysisPersonal from "../components/analysisPersonal.js";
import AnalysisCard from "../components/locationCard.js";
import ContactCard from "../components/contactCard.js";
import TextStatsCard from "../components/textStatsCard.js";
import LinegraphCard from "../components/linegraphCard.js"
import WordCloudCard from "../components/wordCloudCard";
import BreachCard from "../components/breachCard";
import "./analysis.css"

export default function Analysis() {
    const data = JSON.parse(`
        {
            "UUID": "9514085906429",
            "breaches": [
                {
                "Name": "Collection1",
                "Title": "Collection #1",
                "Domain": " ",
                "BreachDate": "2019-01-07",
                "AddedDate": "2019-01-16T21:46:07Z",
                "ModifiedDate": "2019-01-16T21:50:21Z",
                "PwnCount": 772904991,
                "Description": "In January 2019, a large collection of credential stuffing lists (combinations of email addresses and passwords used to hijack accounts on other services) was discovered being distributed on a popular hacking forum. The data contained almost 2.7 <em>billion</em> records including 773 million unique email addresses alongside passwords those addresses had used on other breached services.",
                "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/List.png",
                "DataClasses": [
                    "Email addresses",
                    "Passwords"
                ],
                "IsVerified": false,
                "IsFabricated": false,
                "IsSensitive": false,
                "IsRetired": false,
                "IsSpamList": false
            }
            ],
            "email": null,
            "entities": {
                "Address": [],
                "Location": [],
                "Phone Number": []
            },
            "fullName": null,
            "hourCount": [
                10,
                12,
                18,
                14,
                5,
                6,
                6,
                4,
                1,
                1,
                1,
                0,
                2,
                4,
                5,
                0,
                4,
                3,
                3,
                5,
                3,
                5,
                3,
                4
            ],
            "readingLevel": 14.186050420168069,
            "sentiment": [
                [
                0.11100000000000002,
                0.48199999999999993,
                0.4069999999999999
                ],
                [
                0.13,
                0.7859999999999999,
                0.08399999999999999
                ],
                [
                0.19624999999999992,
                0.5281250000000001,
                0.27562499999999995
                ],
                [
                0.135,
                0.62,
                0.24499999999999997
                ],
                [
                0.3495833333333333,
                0.32749999999999996,
                0.3229166666666666
                ],
                [
                0.24499999999999997,
                0.575,
                0.18
                ],
                [
                0.35333333333333333,
                0.30333333333333334,
                0.3433333333333333
                ],
                [
                0.248,
                0.587,
                0.165
                ],
                [
                0.31133333333333335,
                0.39999999999999997,
                0.2886666666666667
                ],
                [
                0.38375,
                0.36750000000000005,
                0.24874999999999997
                ],
                [
                0.39999999999999997,
                0.39333333333333337,
                0.20666666666666667
                ],
                [
                0.504,
                0.386,
                0.11000000000000001
                ]
            ],
            "stringLength": 46.09243697478992,
            "weekDayCount": [
                14,
                11,
                16,
                18,
                13,
                29,
                18
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

    return (
        <div className="text-center">
            <h1>Hello, {data.fullName}</h1>
            <h3>Here's what we got on you.</h3>
            <br/>
            <Container style={{backgroundColor: '#f1f1f1'}}>
                <Row>
                    <Col><AnalysisCard addresses={data.entities["Address"]} locations={data.entities["Location"]}/></Col>
                    <Col><ContactCard email={data.email} phoneNumbers={data.entities["Phone Number"]}/></Col>
                    <Col><TextStatsCard rawReadingLevel={data.readingLevel} averageChars={data.stringLength}/></Col>
                </Row>

                <LinegraphCard data={data.sentiment}/>
                <Row>
                    <Col><WordCloudCard imageLink={data.wordCloudLink}/></Col>
                </Row>
                <Row>
                    <BreachCard data={data.breaches}/>
                </Row>
            </Container>
        </div>
    )
}
