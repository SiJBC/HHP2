import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardNoPharm from "./userCardNoPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function NonPharmaceuticals(props) {

	const [acupuncture, setAcupuncture] = useState([])
	const [nutraceuticals, setNutraceuticals] = useState([])
	const [nin, setNin] = useState([])
	const [sts, setSts] = useState([])


	useEffect(() => {
		loadPharmaceuticalslength()
	
	
	}, [])

	function loadPharmaceuticalslength(){
		
		API.getHeadacheNoPharm()
		.then(Pharmres =>   {
			returnNutraceuticals(Pharmres.data)
			returnAcupuncture (Pharmres.data)
			returnNin(Pharmres.data)
			returnTCNS(Pharmres.data)
		}         
	)} 

	function returnNutraceuticals(treatments){
		var i;
		var Nutraceuticals = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Nutraceuticals"){
				Nutraceuticals.push(i)
			}
		}
		console.log("Nutraceuticals is " + Nutraceuticals.length)
		setNutraceuticals(Nutraceuticals)
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

	function returnNin(treatments){
		var i;
		var Nin = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "Neuromodulation"){
				Nin.push(i)
			}
		}
		console.log("Nin is " + Nin.length)
		setNin(Nin)
	}

	function returnTCNS(treatments){
		var i;
		var TCNS = []
		for (i=0; i< treatments.length; i++)
		{
		if(treatments[i].Treatment === "STS"){
				TCNS.push(i)
			}
		}
		console.log("Nin is " + TCNS.length)
		setSts(TCNS)
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
					{ y:  nutraceuticals.length, label: "Nutraceuticals" },
					{ y:  acupuncture.length, label: "Acupuncture" },
					{ y:  nin.length, label: "Neuromodulation" },
					{ y:  sts.length, label: "STS" },
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