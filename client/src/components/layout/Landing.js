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
import Doctor from "../../assets/img/doctor.jpg"





function Landing(props) {

  return (
    <div>
      <Navbar/>
      <Hero />
    <div className ="container-fluid">
    <div className = "container">


<span>
  <div className = "heading">
  The healthy human project a user driven movement
  
    </div>

    <div className = "subHeading">
    We track current trends of cures for common ailments
    </div>
  
  </span>
  
  <div className ="row mt-200px">
  
  <img className = "doctorImage" src = {Doctor} alt = "doctor" />

 <img className ="headingImage" src = {Healling2} alt = "healling" />

  </div>


  <span>

  <div className = "subHeading1">
  Compare Pharmaceutical and Non-Pharmaceutical solutions
    </div>
    <br></br>
  </span>



  
<div className = "mediaContainer">


<div className="row justify-content-center">



  <br></br>
  <div className = "lg-col-5 sm-col-10">

  <div className ="col-12">
  <a href="/headache">
  <div className="media">
      <img src={HeadacheImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
      <div className="media-body">
        <h2> Headache</h2>

      </div>
    </div>
    </a>
  </div>


  <div className ="col-12">
  <a href="/alzheimers">
  <div className="media">
      <img src={AlzheimersImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
      <div className="media-body">
        <h2> Alzheimers</h2>

   
      </div>
    </div>
    </a>
  </div>

  <div className ="col-12">
  <a href="/diabetes">
  <div className="media">
      <img src={DiabetesImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
      <div className="media-body">
        <h2> Diabetes</h2>
      </div>
    </div>
    </a>
  </div>




  <div className ="col-12">
  <a href="/backpain">
  <div className="media">
      <img src={BackProblemsImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
      <div className="media-body">
        <h2>Backpain</h2>

       
      </div>
    </div>
    </a>
  </div>

  <div className ="col-12">
  <a href="/JointPains">
    <div className="media">
      <img src={JointPainImage} className="align-self-center mr-3" alt="Person" width="96" height="96" />
      <div className="media-body">
        <h2> Joint pain</h2>

     
      </div>
    
    </div>
    </a>

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
