import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardsNoPharm from "./userCardsNoPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function NonPharmaceuticals(props) {

	const [diet, setDiet] = useState([])
	const [glucosamine, setGlucosamine] = useState([])
	const [exercise, setExercise] = useState([])
	const [massage, setMassage] = useState([])


	useEffect(() => {
		loadNonPharmaceuticalslength()
	
	
	}, [])

	function loadNonPharmaceuticalslength(){
		
		API.getJointPainsNoPharm()
		.then(Pharmres =>   {
			returnDiet(Pharmres.data)
			returnGlucosamine(Pharmres.data)
			returnExercise(Pharmres.data)
			returnMassage(Pharmres.data)
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

	function returnGlucosamine(treatments){
		var i;
		var Glucosamine = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Glucosamine"){
			Glucosamine.push(i)
			}
		}
		console.log("Acupuncture is " + Glucosamine.length)
		setGlucosamine(Glucosamine)
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

	function returnMassage(treatments){
		var i;
		
		var Massage = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Massage"){
			Massage.push(i)
			}
		}
		console.log("Massage" + Massage.length)
		setMassage("Massage")
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
					
					{ y:  glucosamine.length, label: "Glucosamine" },
					{ y:  diet.length, label: "Diet" },
					{ y:  exercise.length, label: "Exercise" },
					{ y:  massage.length, label: "Massage" },
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