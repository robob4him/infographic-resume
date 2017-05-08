import { Component, OnInit, Input, HostListener, ElementRef, Injectable } from '@angular/core';
import { D3, D3Service, Selection } from 'd3-ng2-service';
import * as cloudD3 from 'd3-cloud';

export interface Frequency {
  text: string;
  size: number;
}

@Component({
  selector: 'graph-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss'],
})
export class CloudComponent implements OnInit {
  @Input()
  data: Frequency[];

  private d3: D3;
  private host: any;

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
    // const color = d3.scaleLinear()
    let width = +this.host.offsetWidth;
    let height = width;

    cloudD3().size([width, height])
      .words(this.data)
      .fontSize(d => d.size)
      .on('end', this.draw.bind(this, width, height))
      .start();
  }

  draw(width: number, height: number, words: any[]) {
    this.d3.select(this.host).select('svg').remove();
    this.d3.select(this.host).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
        // without the transform, words words would get cutoff to the left and top, they would
        // appear outside of the SVG area
        // .attr('transform', `translate(${width / 2},${(height / 2) - 30})`)
        .selectAll('text')
        .data(words)
        .enter()
          .append('text')
          .style('font-size', d => d.size + 'px')
          // .style('fill', function (d, i) { return color(i); })
          .attr('transform', d => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
          .text(d => d.text);

    const g = this.d3.select(this.host).select('g');
    const gb = (g.node() as any).getBoundingClientRect();
    g.attr('transform', `translate(${width / 2}, ${(gb.height / 2) + (gb.height * .1)})`)
  }

}
