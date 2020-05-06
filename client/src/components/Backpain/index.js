import React from 'react';
// import PieChart from "./PieChart.js"
import Hero from "../Hero"
import Graph from "./graph"
import BackPainImage from "../../assets/img/backproblems.jpeg"
import NavbarGeneral from "../layout/NavbarGeneral"





function Backpain() {



    return (
        <div>
             <NavbarGeneral />
            <Hero />
            <div className = "row justify-content-center">
           
            </div>
        
        
            <div classname="overlay"></div>
            <div className="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <br></br>
                    <div className="post-heading">
                        <h1>The Healthy Human project back pain study

                        </h1
                        >
                        <img src={BackPainImage} alt="headache" />
                        <h4 className="subheading">Back pain can be caused by many different things; tight muscles, acute injuruies bad posture etc.</h4>
                    </div>
                </div>
             
            </div>
            <br></br>
 
             
      
          

            <Graph />
          


        </div>
    )



}




export default Backpain