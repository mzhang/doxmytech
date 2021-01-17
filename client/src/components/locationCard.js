import React from "react";
import Card from "react-bootstrap/Card"
import {BiCurrentLocation} from "react-icons/bi"

export default function card(props) {
    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <BiCurrentLocation style={{fontSize: "2.7em", color: "#3b5998"}}/>
            </Card.Header>
            <Card.Body>

                <Card.Text style={{margin: "0px"}}>
                    You live in <br /> <code>{props.location}</code>. 
                    <br />
                    Maybe near <br /> <code>{props.address}</code>? 
                </Card.Text>

            </Card.Body>
        </Card></div>)
}