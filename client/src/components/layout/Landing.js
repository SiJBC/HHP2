import React, { useState } from "react";
import Hero from "../Hero"
import Card from "../card";
import Footer from "../Footer"
import Navbar from "../layout/Navbar"

import "./style.css"
import HeadacheImage from "../../assets/img/headache.jpeg"
import AlzheimersImage from "../../assets/img/alzheimers.jpg"
import DiabetesImage from "../../assets/img/diabetes.jpg"
import JointPainImage from "../../assets/img/jointpain.jpg"
import BackProblemsImage from "../../assets/img/backproblems.jpeg"
import HeallingImage from "../../assets/img/healling.jpg"
import Healling2 from "../../assets/img/healling2.jpg"

import { Alert } from 'reactstrap'
import { Collapse, Button } from 'reactstrap';

function Landing(props) {

  return (
    <div>
      <Navbar/>
      <Hero />

    <div className = "container">


    <span>
      <div className = "heading">
      The healthy human project is a user driven project helping people to 
      connect to different solutions for their common ailments
      
      </div>
      </span>
      <img className ="headingImage" src = {HeallingImage} alt = "healling"></img>

      <span>
      <div className = "sub-heading">
     To participate in a study 
     <button>Sign up now</button>
      
      </div>
      </span>

      <span>
        <br></br>
      <div className = "heading2">
     Together we can create a healthier world for everybody
     <img className ="headingImage" src = {Healling2} alt = "healling"></img>
      
      </div>
      </span>

      <span>
        <br></br>
      <div className = "heading3">
  Take some time to explore our other studies 

      
      </div>
      </span>

      

    <div className="row justify-content-center">


      <br></br>
      <div className = "lg-col-5 sm-col-10">


   
      <div className ="col-12">
      <div className="media">
          <img src={HeadacheImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
          <div className="media-body">
            <h5> Headache</h5>

            <a href="/headache">click here</a>
          </div>
        </div>
      </div>


      <div className ="col-12">
      <div className="media">
          <img src={AlzheimersImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
          <div className="media-body">
            <h5> Alzheimers</h5>

            <a href="/alzheimers">click here</a>
          </div>
        </div>
      </div>

      <div className ="col-12">
      <div className="media">
          <img src={DiabetesImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
          <div className="media-body">
            <h5> Diabetes</h5>

            <a href="/diabetes">click here</a>
          </div>
        </div>
      </div>


    

      <div className ="col-12">
      <div className="media">
          <img src={BackProblemsImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
          <div className="media-body">
            <h5>Backpain</h5>

            <a href="/backpain">click here</a>
          </div>
        </div>
      </div>

      <div className ="col-12">
      <div className="media">
          <img src={JointPainImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
          <div className="media-body">
            <h5> Joint pain</h5>

            <a href="/JointPain">click here</a>
          </div>
        
        </div>
      </div>
      </div>

     





      </div>



      </div>
<Footer />
    </div>

  );
}


export default Landing;
