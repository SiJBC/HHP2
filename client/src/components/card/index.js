import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
            <h2>{props.Ailment} </h2>
      <div className="content">
        <ul>
          <li>
            <strong>{props.Method}</strong> 
          </li>
          <li>
            <strong>{props.Treatment}</strong> 
          </li>
          <li>
            <strong>{props.Age}</strong> 
          </li>
          <li>
            <strong>{props.ActivityLevel}</strong> 
          </li>
          <li>
            <strong>{props.Source}</strong> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;