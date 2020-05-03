import React from 'react';
// import PieChart from "./PieChart.js"
import Hero from "../Hero"
import Graph from "./graph"
import UserCard from "./userCards"
import AlzheimersImage from "../../assets/img/alzheimers.jpg"





function Alzheimers() {



    return (
        <div>
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
            <article>
                <div classname="container">
                    <div classname="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>

                            <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>

                            <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>

                            <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>

                            <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>

                        </div>



                    </div>

                </div>
            </article>
            </section>
          

            <Graph />



        </div>
    )



}




export default Alzheimers