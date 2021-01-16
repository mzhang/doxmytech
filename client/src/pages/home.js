import React from "react";
import "./home.css"

import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import BootstrapButton from "react-bootstrap/Button"

import { AiFillFacebook } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { FcReddit } from "react-icons/fc";

export default function Home() {
    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>DoxMy.tech</h1> <br />
                <h2>Insert short tagline about project</h2>

                <div class="platformInput">
                    <AiFillFacebook style={{fontSize: "2.7em", color: "#3b5998", marginRight: "5px"}} />
                    <Form inline>
                        <InputGroup>
                            <FormControl
                                placeholder="https://facebook.com/"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                </div>

                <div class="platformInput">
                    <FcReddit style={{fontSize: "2.7em", marginRight: "10px"}} />
                    <Form inline>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">u/</InputGroup.Text>
                        </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                </div>

                <div class="platformInput">
                    <ImTwitter style={{fontSize: "2.5em", color: "#1DA1F2", marginRight: "10px"}}/>
                    <Form inline>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Form>
                </div>

                <BootstrapButton style={{marginTop: "50px"}}>
                    Explore!
                </BootstrapButton>
            </div>
        </div>
    )
}