import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardNoPharm from "./userCardNoPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function NonPharmaceuticals(props) {

	const [massage, setMassage] = useState([])
	const [guidedRelaxation, setGuidedRelaxation] = useState([])
	const [acupuncture, setAcupuncture] = useState([])
	const [physicalTherapy, setPhysicalTherapy] = useState([])


	useEffect(() => {
		loadPharmaceuticalslength()
	
	
	}, [])

	function loadPharmaceuticalslength(){
		
		API.getBackpainNoPharm()
		.then(Pharmres =>   {
			returnMassage(Pharmres.data)
			returnGuidedRelaxation(Pharmres.data)
			returnAcupuncture(Pharmres.data)
			returnPhysicalTherapy(Pharmres.data)
		}         
	)} 

	function returnGuidedRelaxation(treatments){
		var i;
		var guidedRelaxation= []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Guided-relaxation"){
				guidedRelaxation.push(i)
			}
		}
		console.log("Guided Relaxation is " + guidedRelaxation.length)
		setGuidedRelaxation(guidedRelaxation)
	}

	function returnAcupuncture(treatments){
		var i;
		var Acupuncture = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Acupuncture"){
				Acupuncture.push(i)
			}
		}
		console.log("Acupuncture is " + Acupuncture.length)
		setAcupuncture(Acupuncture)
	}

	function returnMassage(treatments){
		var i;
		var Massage = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Massage"){
				Massage.push(i)
			}
		}
		console.log("Massage is " + Massage.length)
		setMassage(Massage)
	}

	function returnPhysicalTherapy(treatments){
		var i;
		var PhysicalTherapy = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Physical-therapy"){
				PhysicalTherapy.push(i)
			}
		}
		console.log("Nin is " + PhysicalTherapy.length)
		setPhysicalTherapy(PhysicalTherapy)
	}


		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Non-Pharmaceuticals"
			},
			axisX: {
				title: "Treatment",
				reversed: true,
			},
			axisY: {
				title: "Number users reported as their preffered treatment",

			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  massage.length, label: "Massage" },
					{ y:  guidedRelaxation.length, label: "Guided-Relaxation" },
					{ y:  acupuncture.length, label: "Acupuncture" },
					{ y:  physicalTherapy.length, label: "Physical-Therapy" },
				]
			}]
		}
		
		return (
		<div>
					<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>

			<UserCardNoPharm />
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}


export default NonPharmaceuticals;