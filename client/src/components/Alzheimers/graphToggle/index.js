import React from 'react';


function graphToggle(props){




    return(
   <div className ="row justify-content-center">
      <a href="#non-pharmaceuticals"
          onClick={() => props.handleGraphChange("non-pharmaceuticals")}
          className={props.currentGraph === "non-pharmaceuticals" ? "nav-link active" : "nav-link"}
        >
         Non-Pharmaceuticals
        </a>
        <a
          href="#pharmaceuticals"
          onClick={() => props.handleGraphChange("Pharmaceuticals")}
          className={props.currentGraph === "pharmaceuticals" ? "nav-link active" : "nav-link"}
        >
        Pharmaceuticals
        </a>

        <a
          href="#piechart"
          onClick={() => props.handleGraphChange("PieChart")}
          className={props.currentGraph === "piechart" ? "nav-link active" : "nav-link"}
        >
       comparison
        </a>

   </div>
         
    )
}

export default graphToggle;