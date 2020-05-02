import React from "react";
import "./style.css";
import clouds from "./clouds.png";
import guyrunning from "./guyrunning.jpeg"


function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${guyrunning})` }}>
      <div className = "row justify-content-center">
        <div className = " col-md6">
        <h1>The Healthy Human Project</h1>
        <h2>Driving data towards a healthy future</h2>
        </div>
    </div>
      </div>

    
  );
}

export default Hero;
