import React, {useEffect, useState} from 'react';
import API from "../../../utils/API"

function graphToggle(props){

  
  const [methodLength, setMethodGraph ] = useState([])
  const [treatment, setTreatmentGraph] = useState([])
  const [pharm, setPharmGraph] = useState([])
  const [nopharm, setNoPharmGraph] = useState([])
  
  
      useEffect(() => {
          loadHeadache()
          loadHeadachePharm()
      }, [])
  
      function loadHeadache(){
          API.getHeadache()
          .then(res =>            
              console.log(res))
      }

      function loadHeadachePharm(){
        API.getHeadachePharm()
        .then(res => setMethodGraph(res))
      }



    return(
   <div className ="row justify-content-center">
      <a href="#non-pharmaceuticals"
          onClick={() => props.handleGraphChange("non-pharmaceuticals")}
          className={props.currentGraph === "PieChart" ? "nav-link active" : "nav-link"}
        >
         Non-Pharmaceuticals
        </a>
        <a
          href="#BarChart"
          onClick={() => props.handleGraphChange("Pharmaceuticals")}
          className={props.currentGraph === "BarChart" ? "nav-link active" : "nav-link"}
        >
        Pharmaceuticals
        </a>

   </div>
         
    )
}

export default graphToggle;