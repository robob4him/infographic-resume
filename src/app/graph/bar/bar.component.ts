import { Component, OnInit, ElementRef, Input, HostListener } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

export type BarEntry = [string, number];

@Component({
  selector: 'graph-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  private d3: D3;
  private host: any;

  @Input()
  data: BarEntry[] = [];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngOnInit();
  }

  constructor(d3Service: D3Service, host: ElementRef) {
    this.d3 = d3Service.getD3();
    this.host = host.nativeElement;
  }

  ngOnInit() {
    let d3 = this.d3;
    let parent: Selection<any, any, any, any>;

    if (null === this.host && null !== this.data) {
      return;
    }

    parent = d3.select(this.host);
    let margin = { top: 20, right: 20, bottom: 30, left: 30 };
    let width = +this.host.offsetWidth - margin.left - margin.right;
    let height = (width / 3) - margin.top - margin.bottom;

    let x = d3.scaleBand()
      .domain(this.data.map(d => d[0]))
      .rangeRound([0, width])
      .paddingInner(.1);

    let y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(this.data, (d) => d[1])]);

    let xAxis = d3.axisBottom<string>(x);
    let yAxis = d3.axisLeft<number>(y).tickPadding(10);

    parent.select('svg').remove();
    let chart = parent.append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    chart.append('g')
      .attr('data-axis', 'x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    chart.append('g')
      .attr('data-axis', 'y')
      .call(yAxis);

    let bar = chart.selectAll('[bar]')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('bar', 'bar')
      .attr('x', d => x(d[0]))
      .attr('y', d => y(d[1]))
      .attr('height', d => height - y(d[1]))
      .attr('width', x.bandwidth());
  }

}
