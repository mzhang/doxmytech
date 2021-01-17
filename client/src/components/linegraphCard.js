import React from "react";
import Card from "react-bootstrap/Card"
import Linegraph from "./linegraph.js"

export default function card(props) {

    let happy = []
    let neutral = []
    let sad = []
    let i;
    for (i = 0; i < props.data.length; i++) {
        happy.push({x:new Date(2020, i), y:props.data[i][0]*100})
        neutral.push({x:new Date(2020, i), y:props.data[i][1]*100})
        sad.push({x:new Date(2020, i), y:props.data[i][2]*100})
    }
    

    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <h2>How happy are you?</h2>
            </Card.Header>
            <Card.Body>

                <Linegraph happy={happy} neutral={neutral} sad={sad}/>

            </Card.Body>
        </Card></div>)
}