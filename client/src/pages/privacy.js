import React from "react";
import "./privacy.css"

export default function Privacy() {
    return (
        <div>
            <h1>Privacy</h1>
            <h2>In order to explore the information that is publicly available on your social medias, you will need to login with Facebook and change your Twitter/Reddit bio.</h2>
            <br/>
            <h2>This is to ensure that your data is only viewable by you!</h2>

            <p style={{position: "absolute", bottom: "20px", left: "0px", right: "0px", marginLeft: "auto", marginRight: "auto",}}>
                We only temporarily store your data. When you end your session, it will be automatically removed. </p>
        </div>
    )
}