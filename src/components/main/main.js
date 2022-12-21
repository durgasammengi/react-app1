import React from "react";
import "./main.css";
export default function Main(props){
    return (
        <div className="container">
            <div className="row">
            <div className="col">{props.message}</div>
            <div className="col">
                <div className="image"></div>
            </div>
            </div>
        </div>
    )
}