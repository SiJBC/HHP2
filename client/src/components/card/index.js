import React from "react";
import "./style.css";
import {Col} from 'reactstrap'

function Card(props) {
  return (
    <Col> 
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
           <button><a href src ={`${props.Source}`}> {props.Source} </a> </button> 
          </li>
        </ul>
      </div>
    </div>
    </Col>
  );
}

export default Card;