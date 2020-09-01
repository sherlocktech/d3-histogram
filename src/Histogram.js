import React, { Component } from 'react'
import './Histogram.css'
import * as d3 from 'd3'

export default class Histogram extends Component {
   constructor(props) {
      super(props);
      this.canvas = React.createRef();
   }

   componentDidMount() {
      const data = this.buildData()
      this.drawBarChart(data)
   }

   buildData() {
      let result = [];
      for (const key in this.props.data) {
         if (this.props.data.hasOwnProperty(key)) {
            const element = this.props.data[key];
            var obj = { "key": key, "value": element }
            result.push(obj);
         }
      }

      return result;
   }

   drawBarChart(data) {
      const canvasHeight = 400
      const canvasWidth = 600
      const scale = 20

      const tooltip = d3.select(this.canvas.current)
         .append('div')
         .attr('class', 'tooltip')
         .style('display', 'none')

      const svgCanvas = d3.select(this.canvas.current)
         .append('svg')
         .attr('width', canvasWidth)
         .attr('height', canvasHeight)
         .style('border', '1px solid black')

      svgCanvas.selectAll('rect')
         .data(data).enter()
         .append('rect')
         .attr('width', 40)
         .attr('height', (datapoint) => datapoint.value * scale)
         .attr('x', (datapoint, iteration) => iteration * 45)
         .attr('y', (datapoint) => canvasHeight - datapoint.value * scale)
         .on('mouseover', (event, datapoint, iteration) => {
            tooltip.style('display', 'block')
               .html(datapoint.key + "<hr>" + datapoint.value)
               .style('left', event.pageX + "px")
               .style('top', event.pageY + 'px')
         })
         .on('mousemove', (event) => {
            tooltip.style('left', event.pageX + "px")
               .style('top', (event.pageY - 40) + 'px')
         })
         .on('mouseout', () => {
            tooltip.style('display', 'none')
         })
   }

   render() {
      return <div ref={this.canvas}></div>
   }
}
