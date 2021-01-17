import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: ""
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "",
				prefix: "",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25.060 },
					{ x: new Date(2017, 1), y: 27.980 },
					{ x: new Date(2017, 2), y: 42.800 },
					{ x: new Date(2017, 3), y: 32.400 },
					{ x: new Date(2017, 4), y: 35.260 },
					{ x: new Date(2017, 5), y: 33.900 },
					{ x: new Date(2017, 6), y: 40.000 },
					{ x: new Date(2017, 7), y: 52.500 },
					{ x: new Date(2017, 8), y: 32.300 },
					{ x: new Date(2017, 9), y: 42.000 },
					{ x: new Date(2017, 10), y: 3.7160 },
					{ x: new Date(2017, 11), y: 3.8400 }
				]
			},{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25.060 },
					{ x: new Date(2017, 1), y: 27.980 },
					{ x: new Date(2017, 2), y: 42.800 },
					{ x: new Date(2017, 3), y: 32.400 },
					{ x: new Date(2017, 4), y: 35.260 },
					{ x: new Date(2017, 5), y: 33.900 },
					{ x: new Date(2017, 6), y: 40.000 },
					{ x: new Date(2017, 7), y: 52.500 },
					{ x: new Date(2017, 8), y: 32.300 },
					{ x: new Date(2017, 9), y: 42.000 },
					{ x: new Date(2017, 10), y: 3.7160 },
					{ x: new Date(2017, 11), y: 3.8400 }
				]
			},{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25.060 },
					{ x: new Date(2017, 1), y: 27.980 },
					{ x: new Date(2017, 2), y: 42.800 },
					{ x: new Date(2017, 3), y: 32.400 },
					{ x: new Date(2017, 4), y: 35.260 },
					{ x: new Date(2017, 5), y: 33.900 },
					{ x: new Date(2017, 6), y: 40.000 },
					{ x: new Date(2017, 7), y: 52.500 },
					{ x: new Date(2017, 8), y: 32.300 },
					{ x: new Date(2017, 9), y: 42.000 },
					{ x: new Date(2017, 10), y: 3.7160 },
					{ x: new Date(2017, 11), y: 3.8400 }
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
}

export default SplineChart;                           