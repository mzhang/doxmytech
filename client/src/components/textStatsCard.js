import React from "react";
import Card from "react-bootstrap/Card"
import {BsLayoutTextSidebarReverse} from "react-icons/bs"

export default function card(props) {
    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <BsLayoutTextSidebarReverse style={{fontSize: "2.7em", color: "#3b5998"}}/>
            </Card.Header>
            <Card.Body>

                <Card.Text style={{margin: "0px"}}>
                    You talk on the internet <code>{props.averageChars}</code> characters at a time. 
                    <br />
                    And you speak at a <code>{props.readingLevel}</code> grade reading level. 
                </Card.Text>

            </Card.Body>
        </Card></div>)
}