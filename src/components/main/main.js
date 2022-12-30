import React from "react";
import "./main.css";

export default function Main(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col"><p id="summary">{props.message}</p></div>
                {/* <div className="col">
                    <div className="image"></div>
                </div> */}
            </div>
            <div className="row">
                <div className="col">
                        <div className="work_title">Work Eperience</div>
                        <div className="work_exp"><p>•	Design and Development tasks for critical applications.<br/>
                        •	Working knowledge in Core Java and JavaEE,  Multithreading, Hibernate, Spring MVC, Spring Boot, Python and Django.<br/>
                        •	Expertise in developing SOAP, RESTful Webservices and APIs with JSON and XML<br/>
                        •	Experienced working in Agile-based SDLC environment and participating in different Scrum sessions<br/>
                        •	Experience in version control tools like GIT and SVN. Build tools like Maven, continuous integration tools like Jenkins, and issue-tracking platform like JIRA<br/>
                        •	Developing Rest based api using spring boot.<br/>
                        •	Used JProfiler to test the application code and log4j & JUnit for logging, debugging, testing<br/>
                        •	Expertise in designing test cases for unit testing applications using JUNIT and testing using MOCKITO.<br/>
                        </p>
                        </div>
                        </div>
                {/* <div className="col">
                        <div className="Project Details"></div>
                </div> */}
            </div>

            <div className="row">
                <div className="col">
                        <div className="keyskill">
                            <div id="keyskills">Key Skills and Knowledge</div>
                            <div id="skill_details">
                            <p>Java<br/>
                                J2ee<br/>
                                Python<br/>
                                Django<br/>
                                Spring boot<br/>
                                Hibernate<br/>
                                Microservices<br/>
                                Webservices<br/>
                                Maven<br/>
                                Oracle,Mysql and Postgres<br/>
                            </p>
                            </div>
                            <div className="bg"></div>
                        </div>
                </div>
                <div className="col"> 
                <div className="keyskill">
                            <div id="keyskills">Other skills</div>
                            <div id="skill_details">
                            <p>
                                Other Skills<br/>
                                SQL <br/>
                                JavaScript<br/>
                                HTML<br/>
                                CSS<br/>
                            </p>
                            </div>
                            <div className="bg"></div>
                        </div>                
                </div>
                <div className="col"> 
                <div className="keyskill">
                            <div id="keyskills">Tools & Softwares</div>
                            <div id="skill_details">
                            <p>
                            Eclipse IDE,VS Code,Intellij<br/>
                            Git <br/>
                            Jira<br/>
                            PyCharm<br/>
                            </p>
                            </div>
                            <div className="bg"></div>
                        </div>  
                </div>
            </div>

            <div className="footer">
                <h1>{props.note}</h1>
            </div>
            
        </div>
        
    )
}