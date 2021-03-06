import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardsNoPharm from "./userCardsNoPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function NonPharmaceuticals(props) {

	const [diet, setDiet] = useState([])
	const [bloodMonitoring, setBloodMonitoring] = useState([])
	const [bariatricSurgery, setBariatricSurgery] = useState([])
	const [exercise, setExercise] = useState([])


	useEffect(() => {
		loadPharmaceuticalslength()
	
	
	}, [])

	function loadPharmaceuticalslength(){
		API.getDiabetes().then(pharmres => console.log(pharmres))
		API.getDiabetesNoPharm()
		.then(Pharmres =>   {
			returnDiet(Pharmres.data)
			returnBloodMonitoring(Pharmres.data)
			returnExercise(Pharmres.data)
			returnBariatricSurgery(Pharmres.data)
		}         
	)} 

	function returnDiet(treatments){
		var i;
		var Diet = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Diet"){
				Diet.push(i)
			}
		}
		console.log("Nutraceuticals is " + Diet.length)
		setDiet(Diet)
	}

	function returnBloodMonitoring(treatments){
		var i;
		var BloodMonitoring = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Blood-monitoring"){
			BloodMonitoring.push(i)
			}
		}
		console.log("BloodMonitoring is " + BloodMonitoring.length)
		setBloodMonitoring(BloodMonitoring)
	}

	function returnBariatricSurgery(treatments){
		var i;
		var BariatricSurgery = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Bariatricsurgery"){
			BariatricSurgery.push(i)
			}
		}
		console.log("Bariatric surgery" + BariatricSurgery.length)
		setBariatricSurgery(BariatricSurgery)
	}

	function returnExercise(treatments){
		var i;
		
		var CognitiveTherapyApproaches = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Exercise"){
			CognitiveTherapyApproaches.push(i)
			}
		}
		console.log("Cognitive-therapy-approaches" + CognitiveTherapyApproaches.length)
		setExercise(CognitiveTherapyApproaches)
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
			
					{ y:  bloodMonitoring.length, label: "Blood-monitoring" },
					{ y:  diet.length, label: "Diet" },
					{ y:  bariatricSurgery.length, label: "Bariatric-Surgery" },
					{ y:  exercise.length, label: "Exercise"},
				]
			}]
		}
		
		return (
		<div>
					<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>

			<UserCardsNoPharm />
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}


export default NonPharmaceuticals;