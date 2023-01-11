import React  from "react";
import "./header.css";
import { NavLink } from 'react-router-dom';
import Main from "../main/home";
import About from "../../about";

export default function Header(props){

           const myfunction =()=>{
            var x1 = document.getElementById("menu");
            x1.classList.toggle("change");
            var x = document.getElementById("marker");
                if (x.className === "nav") {
                    x.className += " responsive";
                } else {
                    x.className = "nav";
                }
               
                }
        const clickMenu = ()=>{
            var x = document.getElementById("menu");
            x.classList.toggle("change");
        }
        
    return (
        <div className="header">
            {/* <div className="myLogo"></div> */}
            <div className="myName">
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
            </div>
            
             <div className="nav" id ="marker">
                <a></a>

            
               {/* <a href="#">Service</a> */}
<NavLink to="/about"><a href="#">Portfolio</a></NavLink>      
               <a href="#">Support</a>
               <a href="#">Contact</a>
<NavLink to="/about"><a href="#">About</a></NavLink>   
<NavLink to="/home"><a href="#" >Home</a></NavLink>
               <a href="javascript:void(0);" className="icon" onClick={myfunction}>
               <div className="container1" id="menu" >
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    </div>  
                </a>
                
                
                </div>
        </div>
    )
}