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
                interval: "1",
                intervalType: "month",
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Percentage of total posts",
                prefix: "",
                minimim: "0",
                maximum: "110",
                valueFormatString:"0'%'",
				includeZero: true
			},
			data: [{
                lineColor: "green",
                markerSize: "0.5",
                markerColor: "green",
				yValueFormatString: "##'%'",
				xValueFormatString: "MMMM",
				type: "spline",
                showInLegend: true,  
				horizontalAlign: "right",
                legendText: "Happy Posts",
				dataPoints: this.props.happy
			},{
                lineColor: "grey",
                markerSize: "0.5",
                markerColor: "grey",
				yValueFormatString: "##'%'",
				xValueFormatString: "MMMM",
				type: "spline",
                showInLegend: true, 
				horizontalAlign: "right",
                legendText: "Neutral Posts",
				dataPoints: this.props.neutral
			},{
                lineColor: "red",
                markerSize: "0.5",
                markerColor: "red",
				yValueFormatString: "##'%'",
				xValueFormatString: "MMMM",
				type: "spline",
                showInLegend: true, 
				horizontalAlign: "right",
                legendText: "Sad Posts",
				dataPoints: this.props.sad
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