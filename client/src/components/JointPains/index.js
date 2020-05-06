import React from 'react';
// import PieChart from "./PieChart.js"
import Hero from "../Hero"
import Graph from "./graph"
import JointPainImage from "../../assets/img/jointpain.jpg"
import NavbarGeneral from "../layout/NavbarGeneral"





function JointPains() {



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
                        <h1>The Healthy Human project Joint Pains study
                        </h1>
                        <img src={JointPainImage} alt="alzheimers" />
                        <h2 className="subheading">Joint Pains is dicsomfort that arises from any joint also known as athralgia</h2>
                    </div>
                </div>
             
            </div>
            </section>
          

            <Graph />



        </div>
    )



}




export default JointPains