import React from "react";
import Card from "react-bootstrap/Card"
import WeekDayFrequencyGraph from "./weekDayFrequencyGraph.js"

export default function card(props) {

    let weekDayCount = []
    let i;
    for (i = 0; i < props.data.length; i++) {
        weekDayCount.push({x:new Date(2021, 1, i, 1, 0), y:(props.data[i])})
    }
    

    return (<div>
        <Card className="text-center top-margins">
            <Card.Header>
                <h2>Which days do you post on?</h2>
            </Card.Header>
            <Card.Body>

                <WeekDayFrequencyGraph weekDayCount={weekDayCount}/>

            </Card.Body>
        </Card></div>)
}