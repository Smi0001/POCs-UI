import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart-array-data',
  templateUrl: './bar-chart-array-data.component.html',
  styleUrls: ['./bar-chart-array-data.component.css']
})
export class BarChartArrayDataComponent implements OnInit {

  data = [10, 5, 12, 15] ;
  constructor() { }

  ngOnInit() {
    const _component = this;
    const width = 300,
      scaleFactor = 20,
      barHeight = 30;
    const graph = d3.select('app-bar-chart-array-data')
      .append('svg')
      .attr('width', width)
      .attr('height', barHeight * _component.data.length);
    const bar = graph.selectAll('g')
      .data(_component.data)
      .enter()
      .append('g')
      .attr('transform', function(d, i) {
          return 'translate(0,' + i * barHeight + ')';
      });
    bar.append('rect').attr('width', function(d) {
      return d * scaleFactor;
    })
    .attr('height', barHeight - 1);
    bar.append('text')
      .attr('x', function(d) { return (d * scaleFactor); })
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .text(function(d) { return d; });
  }

}
