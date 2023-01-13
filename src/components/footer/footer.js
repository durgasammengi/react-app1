import React from "react";
import "./footer.css";


export default function Footer(props) {
return (
    <div className="footer">
        <h1>{props.note}</h1>
        <div class="animation-area">
      <ul class="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      </div>
    </div>
);
}
