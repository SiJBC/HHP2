import React from 'react';
// import PieChart from "./PieChart.js"
import Hero from "../Hero"
import Graph from "./graph"
import UserCard from "./userCards"
import HeadacheImage from "../../assets/img/headache.jpeg"
import NavbarGeneral from "../layout/NavbarGeneral"




function HeadAche() {



    return (
        <div>
            <NavbarGeneral />
            <Hero />
            <div className = "row justify-content-center">
            <img src={HeadacheImage} alt="headache" />
            </div>
        
            <section>
            <div classname="overlay"></div>
            <div className="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <br></br>
                    <div className="post-heading">
                        <h1>The Healthy Human project Headache study
                        </h1>
                        <h2 className="subheading">Headaches can be a sign of a fatigue, caffeine withdrawal(seriously), stress or something more serious</h2>
                    </div>
                </div>
             
            </div>

            </section>
          

            <Graph />
     


        </div>
    )



}




export default HeadAche