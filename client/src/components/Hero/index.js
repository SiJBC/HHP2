import React from "react";
import "./style.css";
import guyrunning from "./guyrunning.jpeg"


function Hero() {
  return (
    <div className = "container-fluid">
            <div className="hero" style={{ backgroundImage: `url(${guyrunning})` }}>
      <div className = "">
        <div className = "">
        <h1>The Healthy Human Project</h1>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Hero;
