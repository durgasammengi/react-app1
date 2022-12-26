import React from 'react'
import "./components/main/main.css"

export default function About(props) {
  return (
    <div className='container'>
        <div className="row">
                <div className="col"><h1>{props.about}</h1></div>
                <div className="col">
                    {/* <div className="image"></div> */}
                </div>
        </div>
        <div className="footer">
                <h1>about @ps</h1>
        </div>
    </div>
  )
}