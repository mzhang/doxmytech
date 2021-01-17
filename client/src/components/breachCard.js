import React from "react";
import { Card } from "react-bootstrap"
import SingleBreachView from "./singleBreachView"

export default function BreachCard(props) {
    function renderBreaches() {
        if (!props?.data?.length) {
            return <Card.Title>We found no breaches!</Card.Title>;
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
                    Data Breaches
                </Card.Header>
                <Card.Body>
                    {renderBreaches()}
                </Card.Body>
            </Card>
        </div>
    )
}