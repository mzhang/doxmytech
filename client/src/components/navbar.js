import React from "react";
import { Link } from "@reach/router";

export default function Navbar() {
    return (
        <div>
            <nav>
                <h3>DoxMy.Tech</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/privacy">Privacy</Link></li>
                </ul>
            </nav>
        </div>
    )
}