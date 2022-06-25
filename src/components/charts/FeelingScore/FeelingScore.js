import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './feelingscorechart.css';

export default function FeelingScore() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

  	const d3Chart = useRef();

	const parseDate = d3.timeParse('%Y-%m-%d')

    	useEffect(()=>{
    const startScoreData = days && days.map(each => {
      return {date: parseDate(each.logDate.slice(0,10)), es: each.endScore}});

    const ssDataFinal = startScoreData.sort((a,b) => a.date - b.date);

    //Setting dimensions
				const margin = {top: 20, right: 30, bottom: 30, left: 30}
				const width = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
				const height = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

				// Set up svg
				const svg = d3.select(d3Chart.current)
								.attr('width', width + margin.left + margin.right)
								.attr('height', height + margin.top + margin.bottom)

								.append('g')
									.attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

				// x axis scale
				const x = d3.scaleTime()
							.domain(d3.extent(ssDataFinal, function(d){return d.date}))
							.range([0,width])

				svg.append('g')
					.attr('transform', 'translate(0,' + height + ')')
					.call(d3.axisBottom(x))
          .style('font-family','caveat, cursive')
          .style('font-size','0.8em')

				// Get the max value of feeling
				const max = d3.max(ssDataFinal, function(d){return d.es})

				// y axis scale
				const y = d3.scaleLinear()
							.domain([0, max])
							.range([height,0])

				svg.append('g')
					.call(d3.axisLeft(y))
          .style('font-family','caveat, cursive')
          .style('font-size','0.8em')

				// Draw line
				svg.append('path')
					.datum(ssDataFinal)
					.attr('fill', 'none')
					.attr('stroke','white')
					.attr('stroke-width', 5)
					.attr('d', d3.line()
								.x(function(d){return x(d.date)})
								.y(function(d){return y(d.es)})
						)


				// Add title
				svg.append('text')
					.attr('x',(width/2))
					.attr('y', (margin.top/5))
					.attr('text-anchor', 'middle')
					.attr('font-size', '1.2em')
          .attr('font-family', 'caveat, cursive')
					.attr('fill','white')
					.text('Feeling over Time')

	},[]);



	return (
		<div id='d3demo'>
			<svg ref={d3Chart}></svg>
		</div>
	)
}