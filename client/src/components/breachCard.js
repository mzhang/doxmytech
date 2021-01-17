import React from "react";
import { Card } from "react-bootstrap"
import SingleBreachView from "./singleBreachView"

export default function BreachCard(props) {
    function renderBreaches() {
        if (!props?.data?.length) {
            return <Card.Title><p style={{margin: "2em"}}>We found no breaches associated with your Email... yet.</p></Card.Title>;
        } else {
            return props.data.map(breach => {
                return <SingleBreachView data={breach}/>
            })
        }
    }
    return (
        <div>
            <Card className="text-center top-margins">
                <Card.Header>
                    <h2>Data Breaches</h2>
                </Card.Header>
                    {renderBreaches()}
            </Card>
        </div>
    )
}