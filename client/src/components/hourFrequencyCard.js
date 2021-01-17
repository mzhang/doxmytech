import React from "react";
import Card from "react-bootstrap/Card"
import HourFrequencyGraph from "./hourFrequencyGraph.js"

export default function card(props) {

    let hourCount = []
    
    let i;
    for (i = 0; i < props.data.length; i++) {
        console.log((props.data[i]))
        hourCount.push({x:new Date(2021, 1, 1, i, 0), y:(props.data[i])})
    }
    

    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <h2>At what times of day do you post?</h2>
            </Card.Header>
            <Card.Body>

                <HourFrequencyGraph hourCount={hourCount}/>

            </Card.Body>
        </Card></div>)
}