import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
function Pharmaceuticals (props) {

	const [corticosteroids, setCorticosteroids] = useState([])
	const [ibuprofen, setIbuprofen] = useState([])
	const [opioids, setOpioids] = useState([])
	const [tylenol, setTylenol] = useState([])

	useEffect(() => {
		loadPharmaceuticalslength()
	
		// addSymbols(1)
	}, [])



			// Fioricet  
	function loadPharmaceuticalslength(){
		
		API.getBackpainPharm()
		.then(Pharmres =>   {
			returnCorticosteroids(Pharmres.data)
			returnIbuprofen(Pharmres.data)
			returnOpioids(Pharmres.data)
			returnTylenol(Pharmres.data)
		}         
	)} 


	function returnCorticosteroids(treatments) {
		
		var i;
		var Corticosteroids = []
		for ( i=0; i <treatments.length; i++){

			if(treatments[i].Treatment === "Corticosteroids"){
				Corticosteroids.push(i)
			} 
		}
		console.log("Fioricet length is " + Corticosteroids.length)
		setCorticosteroids(Corticosteroids)
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
			console.log("Tylenol length is " + Ibuprofen.length)
			setIbuprofen(Ibuprofen)
		}

		function returnOpioids(treatments){
			var i;
			var Opioids = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Opioids"){
                Opioids.push(i)
				}
			}
			console.log("Opioids length is " + Opioids.length)
			setOpioids(Opioids)
		}

		function returnTylenol(treatments){
			var i;
			var Tylenol = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Tylenol"){
					Tylenol.push(i)
				}
			}
			console.log("Tylenol length is " + Tylenol.length)
			setTylenol(Tylenol)
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
					{ y:  opioids.length, label: "Fioricet" },
					{ y:  ibuprofen.length, label: "Ibuprofen" },
					{ y:  corticosteroids.length, label: "Caffeine" },
					{ y:  tylenol.length, label: "Advil" },
				]
			}]
		}
		
		return (
		<div>
					<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
		
	
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}


export default Pharmaceuticals;