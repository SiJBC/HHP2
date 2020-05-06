import React from "react";
import "./style.css";
import guyrunning from "./guyrunning.jpeg"


function Hero() {
  return (
    <div className = "container-fluid">
            <div className="hero" style={{ backgroundImage: `url(${guyrunning})` }}>
      <div className = "row justify-content-center">
        <div className = " col-md6 col-sm10 lg-12 ml-20">
        <h1>The Healthy Human Project</h1>
        <h2>Driving data towards a healthy future</h2>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Hero;
