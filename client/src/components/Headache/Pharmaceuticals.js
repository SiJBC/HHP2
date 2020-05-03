import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardPharm from "./userCardsPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
function Pharmaceuticals (props) {

	const [fioricet, setFioricet] = useState([])
	const [ibuprofen, setIbuprofen] = useState([])
	const [caffeine, setCaffeine] = useState([])
	const [advil, setAdvil] = useState([])

	useEffect(() => {
		loadPharmaceuticalslength()
	
		// addSymbols(1)
	}, [])



			// Fioricet  
	function loadPharmaceuticalslength(){
		
		API.getHeadachePharm()
		.then(Pharmres =>   {
			returnFioricet(Pharmres.data)
			returnIbuprofen(Pharmres.data)
			returnCaffeine(Pharmres.data)
			returnAdvil(Pharmres.data)
		}         
	)} 


	function returnFioricet(treatments) {
		
		var i;
		var Fioricet = []
		for ( i=0; i <treatments.length; i++){

			if(treatments[i].Treatment === "Fioricet"){
				Fioricet.push(i)
			} 
		}
		console.log("Fioricet length is " + Fioricet.length)
		setFioricet(Fioricet)
	}
		
		// Ibuprofen
		function returnIbuprofen(treatments){
			var i;
			var Ibuprofen = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Ibuprofen"){
					Ibuprofen.push(i)
				}
			}
			console.log("Ibuprofen length is " + Ibuprofen.length)
			setIbuprofen(Ibuprofen)
		}

		function returnCaffeine(treatments){
			var i;
			var Caffeine = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Caffeine"){
					Caffeine.push(i)
				}
			}
			console.log("Caffeine length is " + Caffeine.length)
			setCaffeine(Caffeine)
		}

		function returnAdvil(treatments){
			var i;
			var Advil = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Advil"){
					Advil.push(i)
				}
			}
			console.log("Advil length is " + Advil.length)
			setAdvil(Advil)
		}

		
	



	
	// function addSymbols(e){
	// 	var suffixes = ["", "K", "M", "B"];
	// 	var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
	// 	if(order > suffixes.length - 1)
	// 		order = suffixes.length - 1;
	// 	var suffix = suffixes[order];
	// 	return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	// }

	
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Pharmaceutical Treatments"
			},
			axisX: {
				title: "Treatment",
				reversed: true,
			},
			axisY: {
				title: "Number of users reported as their preffered treatment",
				// labelFormatter: addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  fioricet.length, label: "Fioricet" },
					{ y:  ibuprofen.length, label: "Ibuprofen" },
					{ y:  caffeine.length, label: "Caffeine" },
					{ y:  advil.length, label: "Advil" },
				]
			}]
		}
		
		return (
		<div>
					<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			<UserCardPharm />
		
	
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}


export default Pharmaceuticals;