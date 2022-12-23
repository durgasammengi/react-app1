import React from "react";
import "./main.css";

export default function Main(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col"><p id="summary">{props.message}</p></div>
                <div className="col">
                    <div className="image"></div>
                </div>
                
            </div>
            {/* <div className="row">
                <div className="col">
                        <div className="Project Details"></div>
                </div>
                <div className="col">
                        <div className="Project Details"></div>
                </div>
            </div> */}

            <div className="footer">
                <h1>{props.note}</h1>
            </div>
        </div>
        
    )
}