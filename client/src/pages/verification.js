import React, { useState } from "react";
import "./verification.css"
import axios from "axios";

import {FacebookCard, TwitterCard, SuccessCard} from "../components/card.js"


//import NodeFetch from "node-fetch";

export default function Verification(props) {
    const [fbData, setFBData] = useState('');
    const [twitterData, setTwitterData] = useState('');

    const responseFacebook = async (response) => {
        if (response.accessToken) setFBData(response);
        console.log(response["id"])
        console.log(response["accessToken"])

        const res = await axios({
            method: 'post',
            url: 'http://localhost:5000/facebookCheck',
            data: {
                "profileLink": props.location.state.facebook,
                "accessCode": response["accessToken"],
                "profileID": response["id"]
            }
        })

        console.log(res.data);
    }

    const responseTwitter = async () => {
        const res = await axios({
            method: 'get',
            url: 'http://localhost:5000/twitterBio/' + props.location.state.twitter
        })

        let bio = res.data;
        console.log(bio)
        if (bio.toLowerCase() === "doxmytech") {
            setTwitterData("twitter bio is correct");
        }
    }


    // You can access the user's twitter/facebook/reddit using props.location.state
    // For example, props.location.state.reddit gives the user's supposed reddit username


    function summonCards() {
        let outArray = []
        if (props?.location?.state?.facebook) outArray.push((fbData) ? <SuccessCard title={"Facebook"} /> : <FacebookCard responseFacebook={responseFacebook} fbData={fbData}/>)
        if (props?.location?.state?.twitter) outArray.push((twitterData) ? <SuccessCard title={"Twitter"} /> : <TwitterCard responseTwitter={responseTwitter} twitterData={twitterData}/>)
        return outArray
    }

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Hold on...</h1>
                <h2>We need your permission before continuing.</h2>
                {summonCards()}

            </div>
        </div>
    )
}
