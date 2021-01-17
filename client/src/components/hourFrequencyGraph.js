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
            legend: {
				verticalAlign: "bottom",
				reversed: true
			},axisX: {
                interval: "2",       
                intervalType: "hour",
                valueFormatString: "h TT", 
                labelAngle: -20
			},
			axisY: {
				title: "Number of Posts",
                prefix: "",
                valueFormatString:"0",
				includeZero: true
			},
			data: [{
                markerSize: "0.5",
				yValueFormatString: "0 'Posts'",
				xValueFormatString: "H TT",
				type: "splineArea",
				dataPoints: this.props.hourCount
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