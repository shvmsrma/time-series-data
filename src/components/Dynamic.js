import React,{Component} from 'react';
import CanvasJSReact  from '../canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{x: 1, y: 10,y1:15,y2:16},
     {x: 2, y: 13,y1:19,y2:18}, 
     {x: 3, y: 18,y1:21,y2:19}, 
     {x: 4, y: 20,y1:18,y2:14},
      {x: 5, y: 19,y1:14,y2:17},
      {x: 6, y: 10,y1:18,y2:20}, 
      {x: 7, y: 13,y1:18,y2:21}, 
      {x: 8, y: 18,y1:13,y2:19},
       {x: 9, y: 20,y1:18,y2:17}, 
       {x: 10, y: 17,y1:14,y2:21}]; 
var dps1 = [{x:1,y:15},
    {x:2,y:18},
    {x:3,y:19},
    {x:4,y:21},
    {x:5,y:18},
    {x:6,y:14},
    {x:7,y:18},
    {x:8,y:18},
    {x:9,y:13},
    {x:10,y:18},]
var dps2 = [{x:1,y:21},
    {x:2,y:16},
    {x:3,y:18},
    {x:4,y:19},
    {x:5,y:14},
    {x:6,y:17},
    {x:7,y:20},
    {x:8,y:21},
    {x:9,y:19},
    {x:10,y:17},
]    
var xVal = dps.length + 1;
var yVal = 20;
var y1Val=24;
var y2Val = 24;
var updateInterval = 3000;
class Dynamic extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	componentDidMount() {
		this.updateChart(20);
		setInterval(this.updateChart, updateInterval);
	}
	toggleDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	updateChart() {
        var m = Math.floor((Math.random() * 15) + 5) -Math.floor((Math.random() * 20) + 1);
        console.log(m)
        yVal = yVal - m;
        console.log(yVal)
        y1Val =y1Val - m;
        console.log(y1Val);
        y2Val = y2Val  - m;
        console.log(y2Val);
        dps.push({x: xVal,y: yVal});
        dps1.push({x: xVal,y: y1Val});
		dps2.push({x: xVal,y: y2Val});

		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
        }
        if (dps1.length >  10 ) {
			dps1.shift();
        }if (dps2.length >  10 ) {
			dps2.shift();
        }
        console.log(dps)
		this.chart.render();
	}
	render() {
		const options = {
			zoomEnabled:true,
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
				title: "Percentage Usage",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD",
				includeZero: false
			},
			
			toolTip: {
				shared: true
			},
			data: [{
				type: "line",
				name: "CPU Usage",
				showInLegend: true,
				xValueFormatString: "# Sec",
				yValueFormatString: "##",
				dataPoints: dps
					
				
			},
			{
				type: "line",
				name: "Memory Usage",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "# Sec",
				yValueFormatString: "##",
				dataPoints: dps1
			},{
				type: "line",
				name: "Disk Usage",
				axisYType: "Tertiary",
				showInLegend: true,
				xValueFormatString: "# Sec",
				yValueFormatString: "##",
				dataPoints: dps2
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
export default Dynamic;