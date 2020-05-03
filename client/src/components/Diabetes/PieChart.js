import React, {  useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCards from "./userCards"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function PieChart(props) {
	
	const [pharm, setPharm] = useState([])
	const [noPharm, setNoPharm] = useState([])

	useEffect(() => {
		loadAlzheimersPharm()
		loadAlzheimersNoPharm()
		console.log("here")
	}, [])

	function loadAlzheimersPharm(){
		API.getAlzheimersPharm()
		.then(Pharmres =>            
			setPharm(Pharmres.data))
	} 

	function loadAlzheimersNoPharm(){
		
		API.getAlzheimersNoPharm()
		
		.then(NoPharmres =>            
			setNoPharm(NoPharmres.data))
	}

 {
	//  console.log(pharm)
		const options = {
			exportEnabled: false,
			animationEnabled: true,
			title: {
				text: "Pharmaceutical vs Non-Pharmacetuical"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}",
				dataPoints: [
					{ y: pharm.length, label: "Pharmaceutical" },
					{ y: noPharm.length, label: "Non-pharmaceutical" },
			
				]
			}]
		}
		
		return (
		<div>
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			<UserCards />
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;