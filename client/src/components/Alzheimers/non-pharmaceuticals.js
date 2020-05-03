import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardsNoPharm from "./userCardsNoPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function NonPharmaceuticals(props) {

	const [diet, setDiet] = useState([])
	const [emotionalTraining, setEmotionalTraining] = useState([])
	const [exercise, setExercise] = useState([])
	const [cognitiveTherapyApproaches, setCognitiveTherapyApproaches] = useState([])


	useEffect(() => {
		loadPharmaceuticalslength()
	
	
	}, [])

	function loadPharmaceuticalslength(){
		
		API.getAlzheimersNoPharm()
		.then(Pharmres =>   {
			returnDiet(Pharmres.data)
			returnEmotionalTraining (Pharmres.data)
			returnExercise(Pharmres.data)
			returnCognitiveTherapyApproaches(Pharmres.data)
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

	function returnEmotionalTraining(treatments){
		var i;
		var EmotionalTraining = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Emotional-training"){
			EmotionalTraining.push(i)
			}
		}
		console.log("Acupuncture is " + EmotionalTraining.length)
		setEmotionalTraining(EmotionalTraining)
	}

	function returnExercise(treatments){
		var i;
		var Exercise = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Exercise"){
			Exercise.push(i)
			}
		}
		console.log("Exercise is " + Exercise.length)
		setExercise(Exercise)
	}

	function returnCognitiveTherapyApproaches(treatments){
		var i;
		
		var CognitiveTherapyApproaches = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Cognitive-therapy-approaches"){
			CognitiveTherapyApproaches.push(i)
			}
		}
		console.log("Cognitive-therapy-approaches" + CognitiveTherapyApproaches.length)
		setCognitiveTherapyApproaches(CognitiveTherapyApproaches)
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
					
					{ y:  emotionalTraining.length, label: "Emotional-training" },
					{ y:  diet.length, label: "Diet" },
					{ y:  exercise.length, label: "Exercise" },
					{ y:  cognitiveTherapyApproaches.length, label: "Cognitive-therapy-approaches" },
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