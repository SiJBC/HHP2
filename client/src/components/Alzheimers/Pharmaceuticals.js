import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API"
import UserCardPharm from "./userCardsPharm"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function Pharmaceuticals (props) {

	const [galantamine, setGalantamine] = useState([])
	const [donepezil, setDonepezil] = useState([])
	const [memantine, setMemantine] = useState([])
	const [cholinesteraseInhibitors, setcholinesteraseInhibitors] = useState([])

	useEffect(() => {
		loadPharmaceuticalslength()
	
		// addSymbols(1)
	}, [])



			// Fioricet  
	function loadPharmaceuticalslength(){
		
		API.getAlzheimersPharm()
		.then(Pharmres =>   {
			returnGalantamine(Pharmres.data)
			returnDonepezil(Pharmres.data)
			returnMemantine(Pharmres.data)
			returncholinesteraseInhibitors(Pharmres.data)
		}         
	)} 


	function returnGalantamine(treatments) {
		
		var i;
		
		var Galantamine = []
		for ( i=0; i <treatments.length; i++){

			if(treatments[i].Treatment === "Galantamine"){
				Galantamine.push(i)
			} 
		}
		console.log("Galantamine length is " + Galantamine.length)
		setGalantamine(Galantamine)
	}
		
		// Ibuprofen
		function returnDonepezil(treatments){
			var i;
			var Donepezil = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Donepezil"){
				Donepezil.push(i)
				}
			}
			console.log("Ibuprofen length is " + Donepezil.length)
			setDonepezil(Donepezil)
		}

		function returnMemantine(treatments){
			var i;
			var Memantine = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Memantine"){
				Memantine.push(i)
				}
			}
			console.log("Memantine length is " + Memantine.length)
			setMemantine(Memantine)
		}
		
		function returncholinesteraseInhibitors(treatments){
			var i;
			var CholinesteraseInhibitors = []
			for (i=0; i< treatments.length; i++)
			{
			if(treatments[i].Treatment === "Cholinesterase-inhibitors"){
				CholinesteraseInhibitors.push(i)
				}
			}
			console.log("cholinesteraseInhibitors length is " + CholinesteraseInhibitors.length)
			setcholinesteraseInhibitors(CholinesteraseInhibitors)
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
					{ y:  galantamine.length, label: "Galantamine" },
					{ y:  donepezil.length, label: "Donepezil" },
					{ y:  memantine.length, label: "Memantine" },
					{ y:  cholinesteraseInhibitors.length, label: "Cholinesterase-inhibitors"},
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