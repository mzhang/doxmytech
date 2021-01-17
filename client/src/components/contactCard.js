import React from "react";
import Card from "react-bootstrap/Card"
import {AiFillContacts} from "react-icons/ai"
import TextLoop from "react-text-loop"

export default function card(props) {
    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <AiFillContacts style={{fontSize: "2.7em", color: "#3b5998"}}/>
            </Card.Header>
            <Card.Body>

                {(props.email) ? <Card.Text style={{margin: "0px"}}>
                    You probably use <br /> <code>{props.email}</code>
                    <br />
                </Card.Text> : null}
                
                {(props?.phoneNumbers?.length > 0) ? <Card.Text style={{ margin: "0px" }}>
                    Would your phone ring if we dialed <code><TextLoop children={props.phoneNumbers} interval={2000} /> </code>?
                </Card.Text> : null}

            </Card.Body>
        </Card></div>)
}