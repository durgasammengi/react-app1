import React from "react";
import "./main.css";

export default function Main(props){
    return (
        <div className="main">
            <h1>{props.message}</h1>
        </div>
    )
}