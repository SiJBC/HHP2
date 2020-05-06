import React from 'react';
// import PieChart from "./PieChart.js"
import Hero from "../Hero"
import Graph from "./graph"

import AlzheimersImage from "../../assets/img/alzheimers.jpg"
import NavbarGeneral from "../layout/NavbarGeneral"





function Alzheimers() {



    return (
        <div>
             <NavbarGeneral />
            <Hero />
            <div className = "row justify-content-center">
     
       
            </div>
        
            <section>
            <div classname="overlay"></div>
            <div className="row">
                <div className ="col-lg-8 col-md-10 mx-auto">
                  <br></br>
                    <div className="post-heading">
                        <h1>The Healthy Human project Alzheimers study
                        </h1>
                        <img src={AlzheimersImage} alt="alzheimers" />
                        <h2 className="subheading">Alzheimers is an irreversible, progressive brain disorder that slowly destroys memory and thinking skills </h2>
                    </div>
                </div>
             
            </div>
            </section>
          

            <Graph />



        </div>
    )



}




export default Alzheimers