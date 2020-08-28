import React, { Component } from 'react'
import './App.css'
import * as d3  from 'd3'

export default class Histogram extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   
   componentDidMount() {
      this.createBarChart()
   }

   componentDidUpdate() {
      this.createBarChart()
   }

   createBarChart() {
      const chartValues = Object.values(this.props.data)
      const dataMax = d3.max(chartValues)
      const yScale = d3.scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
      
      const svg = d3.select(this.node)
         .style("border", "1px solid red")

      svg.selectAll('rect')
         .data(chartValues)
         .enter()
         .append('rect')
      
      svg.selectAll('rect')
         .data(chartValues)
         .exit()
         .remove()
      
      svg.selectAll('rect')
         .data(chartValues)
         .style('fill', '#fe9922')
         .attr('x', (d,i) => i * 25)
         .attr('y', d => this.props.size[1] - yScale(d))
         .attr('height', d => yScale(d))
         .attr('width', 25)
   }

   render() {
      return <svg ref={node => this.node = node}
         width={500} height={500}>
      </svg>
   }
}
