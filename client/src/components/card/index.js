import React from "react";
import "./style.css";
import {Col} from 'reactstrap'

function Card(props) {
  return (
    <Col> 
    <div className="card">
    <h5 className="card-title">{props.Ailment}</h5>
      <div className="content">
      <p className="card-text">
      {props.Method}
      </p>
      <p className="card-text">
      {props.Treatment}
      </p>
      <p className="card-text">
      {props.Age}
      </p>
      <p className="card-text">
      {props.ActivityLevel}
      </p>
      <p className="card-text">
      {props.Story}
      </p>
      <a href src ={`${props.Source}`} className ="card-link"> link to source </a> 
      </div>
    </div>
    </Col>
  );
}

export default Card;