import React from "react";
import Card from "react-bootstrap/Card"
import {BsLayoutTextSidebarReverse} from "react-icons/bs"

export default function card(props) {
    let readingScore;

    if (props.averageChars > 100) {
        readingScore = "below a 5th";
    } else if (props.averageChars > 90) {
        readingScore = "5th";
    } else if (props.averageChars > 80) {
        readingScore = "6th";
    } else if (props.averageChars > 70) {
        readingScore = "7th";
    } else if (props.averageChars > 60) {
        readingScore = "8th";
    } else if (props.averageChars > 50) {
        readingScore = "9th";
    } else if (props.averageChars > 40) {
        readingScore = "10th - 11th";
    } else if (props.averageChars > 30) {
        readingScore = "12th";
    } else {
        readingScore = "above a 12th";
    }

    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <BsLayoutTextSidebarReverse style={{fontSize: "2.7em", color: "#3b5998"}}/>
            </Card.Header>
            <Card.Body>

                <Card.Text style={{margin: "0px"}}>
                    You talk on the internet <code>{props.averageChars}</code> characters at a time. 
                    <br />
                    And you speak at <code>{readingScore}</code> grade reading level. 
                </Card.Text>

            </Card.Body>
        </Card></div>)
}