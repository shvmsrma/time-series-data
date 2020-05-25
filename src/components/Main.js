import React,{Component} from 'react' ;
import CanvasJSReact  from '../canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Main extends Component {	
	
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
				text: "CPU,MemoryGB and Disk SpaceGB vs Time"
			},
			subtitles: [{
				text: "Click Legend to Hide or Unhide Data Series"
			}],
			axisX: {
				title: "Time"
			},
			axisY: {
				title: "CPU",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD",
				includeZero: false
			},
			axisY2: {
				title: "Memory Usage",
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0",
				includeZero: false
			},
			axisY3: {
				title: "Disk Usage",
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0",
				includeZero: false
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "CPU Usage",
				showInLegend: true,
				xValueFormatString: "# Sec",
				yValueFormatString: "##",
				dataPoints: [
						{ x: 1, y: 20 },
						{ x: 2, y: 21 },
						{ x: 3, y: 22 },
						{ x: 4, y: 24 },
						{ x: 5, y: 28 },
						{ x: 6, y: 24 },
						{ x: 7, y: 33 },
						{ x: 8, y: 30 },
						{ x: 9, y: 25 },
						{ x: 10, y: 29 },
						{ x: 11, y: 32 },
						{ x: 12, y: 30 },					
						{ x: 13, y: 27 },
						{ x: 14, y: 20 },
						{ x: 15, y: 20 },
						{ x: 16, y: 29 },
						{ x: 17, y: 30 },
						{ x: 18, y: 32 },
						{ x: 19, y: 20 },
						{ x: 20, y: 20 },
						{ x: 21, y: 19 },
						{ x: 22, y: 27 },
						{ x: 23, y: 33 },
						{ x: 24, y: 32 },
				]
					
				
			},
			{
				type: "spline",
				name: "Memory Usage",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "# Sec",
				yValueFormatString: "##",
				dataPoints: [
					{ x: 1, y: 19 },
					{ x: 2, y: 20 },
					{ x: 3, y: 27 },
					{ x: 4, y: 20 },
					{ x: 5, y: 20 },
					{ x: 6, y: 29 },
					{ x: 7, y: 30 },
					{ x: 8, y: 32 },
					{ x: 9, y: 20 },
					{ x: 10, y: 27 },
					{ x: 11, y: 33 },
					{ x: 12, y: 32 },
					{ x: 13, y: 17 },
					{ x: 14, y: 21 },
					{ x: 15, y: 22 },
					{ x: 16, y: 23 },
					{ x: 17, y: 24 },
					{ x: 18, y: 23 },
					{ x: 19, y: 23 },
					{ x: 20, y: 22 },
					{ x: 21, y: 20 },
					{ x: 22, y: 25 },
					{ x: 23, y: 26 },
					{ x: 24, y: 32 },
				]
			},{
				type: "spline",
				name: "Disk Usage",
				axisYType: "Tertiary",
				showInLegend: true,
				xValueFormatString: "# Sec",
				yValueFormatString: "##",
				dataPoints: [
					{ x: 1, y: 17 },
					{ x: 2, y: 21 },
					{ x: 3, y: 22 },
					{ x: 4, y: 23 },
					{ x: 5, y: 24 },
					{ x: 6, y: 23 },
					{ x: 7, y: 23 },
					{ x: 8, y: 22 },
					{ x: 9, y: 20 },
					{ x: 10, y: 25 },
					{ x: 11, y: 26 },
					{ x: 12, y: 32 },
					{ x: 13, y: 19 },
					{ x: 14, y: 20 },
					{ x: 15, y: 27 },
					{ x: 16, y: 20 },
					{ x: 17, y: 20 },
					{ x: 18, y: 29 },
					{ x: 19, y: 30 },
					{ x: 20, y: 32 },
					{ x: 21, y: 20 },
					{ x: 22, y: 27 },
					{ x: 23, y: 33 },
					{ x: 24, y: 32 }
				]
			}]
		}
		
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
			
}
 
		
	

 
export default Main   