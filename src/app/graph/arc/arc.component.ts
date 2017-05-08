import { Component, OnInit, ElementRef, Input, HostListener } from '@angular/core';
import { D3Service, D3, Selection, PieArcDatum } from 'd3-ng2-service';

export type ArcEntry = [string, number];

@Component({
  selector: 'graph-arc',
  templateUrl: './arc.component.html',
  styleUrls: ['./arc.component.scss']
})
export class ArcComponent implements OnInit {
  @Input()
  data: ArcEntry[];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngOnInit();
  }

  d3: D3;
  host: HTMLElement;

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
    let width = +this.host.offsetWidth;
    let height = width;
    let radius = width / 2;

    let color = d3.scaleOrdinal<string>(
      ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"].reverse()
    );
    let arc = d3.arc<PieArcDatum<ArcEntry>>()
      .outerRadius(radius * .9)
      .innerRadius(radius / 2);
    let pie = d3.pie<ArcEntry>()
      .sort((a, b) => b[1].toString().localeCompare(a[1].toString()))
      .value(d => d[1]);

    parent.select('svg').remove();
    let svg = parent.append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    let g = svg.selectAll('[arc]')
      .data(pie(this.data))
      .enter()
        .append('g')
          .attr('arc', 'arc');
    g.append('path')
      .attr('d', arc)
      .style('fill', (d) => color(d.data[0]));
    g.append('text')
      .attr('transform', (d) => 'translate(' + arc.centroid(d) + ')')
      .attr('dy', '.25em')
      .attr('dx', '-1em')
      .text((d) => d.data[0]);
  }

}
