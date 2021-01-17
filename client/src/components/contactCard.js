import React from "react";
import Card from "react-bootstrap/Card"
import {AiFillContacts} from "react-icons/ai"

export default function card(props) {
    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <AiFillContacts style={{fontSize: "2.7em", color: "#3b5998"}}/>
            </Card.Header>
            <Card.Body>

                <Card.Text style={{margin: "0px"}}>
                    You probably use <br /> <code>{props.email}</code>. 
                    <br />
                    Would your phone ring if we dialed <code>{props.number}</code>? 
                </Card.Text>

            </Card.Body>
        </Card></div>)
}