import React, { Component } from "react";
import Pharmaceuticals from "./Pharmaceutical";
import NonPharmaceuticals from "./non-pharmaceutical";
import GraphToggle from "./graphToggle"
import PieChart from "./PieChart";

class Graph extends Component{
    state = {
        currentGraph: "PieChart"
    }

    handleGraphChange = graph => {
        this.setState({
            currentGraph: graph
        })
    }

    renderGraph =() => {
        if(this.state.currentGraph === "PieChart"){
            return<PieChart/>
        }else if(this.state.currentGraph === "non-pharmaceuticals"){
            return<NonPharmaceuticals />
        }
        else if(this.state.currentGraph === "Pharmaceutical"){
            return<Pharmaceuticals />
        }
    }
    render(){
        return(
            <div>
        
                   <div>
                   {this.renderGraph()}
            </div>
            <GraphToggle
                    currentGraph ={this.state.currentgraph}
                    handleGraphChange ={this.handleGraphChange}
                />
            </div>
         
        )
    }
}

export default Graph