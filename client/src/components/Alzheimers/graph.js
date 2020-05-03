import React, { Component } from "react";
import Pharmaceuticals from "./Pharmaceuticals";
import NonPharmaceuticals from "./non-pharmaceuticals";
import GraphToggle from "./graphToggle"
import PieChart from "./PieChart";

class Graph extends Component {
    state = {
        currentGraph: "PieChart"
    }

    handleGraphChange = graph => {
        this.setState({
            currentGraph: graph
        })
    }

    renderGraph = () => {
        if (this.state.currentGraph === "PieChart") {
            return <PieChart />
        } else if (this.state.currentGraph === "non-pharmaceuticals") {
            return <NonPharmaceuticals />
        }
        else if (this.state.currentGraph === "Pharmaceuticals") {
            return <Pharmaceuticals />
        }
    }
    render() {
        return (
            <div>
                <GraphToggle
                    currentGraph={this.state.currentgraph}
                    handleGraphChange={this.handleGraphChange}
                />
                <div>
                    {this.renderGraph()}
                </div>
    
            </div>

        )
    }
}

export default Graph