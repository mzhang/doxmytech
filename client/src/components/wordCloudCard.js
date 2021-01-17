import React from "react";
import { Card, Image } from "react-bootstrap"

export default function card(props) {
    return (<div>
        <Card className="text-center top-margins">
            <Image src={`${process.env.REACT_APP_URL}/image/${props.imageLink}`}/>
        </Card></div>)
}