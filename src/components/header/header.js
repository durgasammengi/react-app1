import React  from "react";
import "./header.css";

export default function Header(props){

    // script>
    //             function myFunction() {
    //             var x = document.getElementById("myTopnav");
    //             if (x.className === "topnav") {
    //                 x.className += " responsive";
    //             } else {
    //                 x.className = "topnav";
    //             }
    //             }
    //             </script>

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
            <div className="myName">
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
            </div>
             <div className="nav" id ="marker">
                <a></a>
               <a href="#">home</a>
               <a href="#">About</a>
               <a href="#">Service</a>
               <a href="#">Portfolio</a>
               <a href="#">Team</a>
               <a href="#">Support</a>
               <a href="#">Contact</a>
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