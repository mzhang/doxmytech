import React from "react";
import Card from "react-bootstrap/Card"
import {BiCurrentLocation} from "react-icons/bi"
import TextLoop from "react-text-loop"

export default function card(props) {
    if (!props.locations?.length && !props.addresses?.length) {
        return (
            <Card className="text-center top-margins">
                <Card.Header>
                    <BiCurrentLocation style={{ fontSize: "2.7em", color: "#3b5998" }} />
                </Card.Header>
                <Card.Body>
                    <p style={{ margin: "0px" }}>We found no contact info - good job :)</p>
                </Card.Body>
            </Card>
        )
    } 
    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <BiCurrentLocation style={{fontSize: "2.7em", color: "#3b5998"}}/>
            </Card.Header>
            <Card.Body>
                {(props?.locations?.length > 0) ? <Card.Text style={{margin: "0px"}}>
                    You might live in <br /> <code><TextLoop children={props.locations} interval={2000} /></code>
                    <br />
                </Card.Text> : null}
                {(props?.addresses?.length > 0) ? <Card.Text style={{ margin: "0px" }}>
                    Maybe near <br /> <code><TextLoop children={props.addresses} interval={2000} /></code>?
                </Card.Text> : null}
            </Card.Body>
        </Card></div>)
}