import React from 'react';
// import PieChart from "./PieChart.js"
import Hero from "../Hero"
import Graph from "./graph"
import NavbarGeneral from "../layout/NavbarGeneral"
import DiabetesImage from "../../assets/img/diabetes.jpg"





function Diabetes() {



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
                        <h1>The Healthy Human project Diabetes study
                        </h1>
                        <img src={DiabetesImage} alt="alzheimers" />
                        <h2 className="subheading">Diabetes occurs when the blood sugar or glucose is too high. Glucose is the body's main source of energy. </h2>
                    </div>
                </div>
             
            </div>

            </section>
          

            <Graph />



        </div>
    )



}




export default Diabetes