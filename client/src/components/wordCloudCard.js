import React from "react";
import { Card, Image } from "react-bootstrap"

export default function card(props) {
    return (<div>
        <Card className="text-center top-margins">
            <Image src={`http://localhost:5000/image/${props.imageLink}`}/>
        </Card></div>)
}