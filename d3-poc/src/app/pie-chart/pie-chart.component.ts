import { Component, OnInit } from '@angular/core';
import * as d3 from '../../assets/d3.v4.min.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  pieChartdata = '../assets/pie-chart-data.csv';
  constructor() { }

  ngOnInit() {
    const svg = d3.select('app-pie-chart > svg.pie-chart');
    const width = svg.attr('width');
    const height = svg.attr('height');
    const radius = Math.min(width, height) / 2;

    const g = svg.append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const color = d3.scaleOrdinal([
        'gray', 'green', 'brown', 'orange', 'yellow', 'red', 'purple'
    ]);

    const pie = d3.pie().value(function(d) { return d.percent; });

    const path = d3.arc()
      .outerRadius(radius - 10).innerRadius(0);

    const label = d3.arc()
        .outerRadius(radius).innerRadius(radius - 80);

    d3.csv(this.pieChartdata, function(error, data) {
      if (error) {
          throw error;
      }

      const arc = g.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

      arc.append('path')
          .attr('d', path)
          .attr('fill', function(d) { return color(d.data.states); });

      // console.log(arc);

      arc.append('text').attr('transform', function(d) {
          return 'translate(' + label.centroid(d) + ')';
      })
      .text(function(d) { return d.data.states; });
    });

      svg.append('g')
        .attr('transform', 'translate(' + (width / 2 - 120) + ',' + (Number(height) + 20) + ')')
        .append('text').text('Top population states in india')
        .attr('class', 'title');
  }

}
