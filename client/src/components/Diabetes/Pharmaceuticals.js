import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardPharm from "./userCardsPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
function Pharmaceuticals (props) {

	const [thiazolidinediones, setThiazolidinediones] = useState([])
	const [meglitinides, setMeglitinides] = useState([])
	const [memantine, setMetformin] = useState([])
	const [sulfonylureas, setSulfonylureas] = useState([])

	useEffect(() => {
		loadPharmaceuticalslength()
	
		// addSymbols(1)
	}, [])



			// Fioricet  
	function loadPharmaceuticalslength(){
		
		API.getDiabetesPharm()
		.then(Pharmres =>   {
			returnThiazolidinediones(Pharmres.data)
			returnMeglitinides(Pharmres.data)
			returnMetformin(Pharmres.data)
			returnSulfonylureas(Pharmres.data)
		}         
	)} 


	function returnThiazolidinediones(treatments) {
		
		var i;
		
		var Thiazolidinediones = []
		for ( i=0; i <treatments.length; i++){

			if(treatments[i].Treatment === "Thiazolidinediones"){
				Thiazolidinediones.push(i)
			} 
		}
		console.log("Thiazolidinediones length is " + Thiazolidinediones.length)
		setThiazolidinediones(Thiazolidinediones)
	}
		
		// Ibuprofen
		function returnMeglitinides(treatments){
			var i;
			var Meglitinides = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Meglitinides"){
				Meglitinides.push(i)
				}
			}
			console.log("Meglitinides length is " + Meglitinides.length)
			setMeglitinides(Meglitinides)
		}

		function returnMetformin(treatments){
			var i;
			var Metformin = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Metformin"){
				Metformin.push(i)
				}
			}
			console.log("Memantine length is " + Metformin.length)
			setMetformin(Metformin)
		}
		
		function returnSulfonylureas(treatments){
			var i;
			var Sulfonylureas = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Sulfonylureas"){
				Sulfonylureas.push(i)
				}
			}
			console.log("cholinesteraseInhibitors length is " + Sulfonylureas)
			setSulfonylureas(Sulfonylureas)
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
					{ y:  thiazolidinediones.length, label: "Thiazolidinediones" },
					{ y:  meglitinides.length, label: "Meglitinides" },
					{ y:  memantine.length, label: "Memantine" },
					{ y:  sulfonylureas.length, label: "Sulfonylureas"},
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