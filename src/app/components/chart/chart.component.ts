import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: []
})
export class ChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['HTML', 'CSS', 'JS', 'Angular', 'Node JS', 'Java SE', 'Java EE', 'SQL'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [85, 80, 80, 75, 65, 87, 50, 50], label: 'Tecnologías' },
    { data: [85, 80, 80, 50, 50, 95, 25, 30], label: 'Experiencia' },
  ];

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(63, 81, 181, .5)',
      // borderColor: 'rgba(225,10,24,0.2)',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225, 64, 129, .5)',
      // borderColor: 'rgba(225,10,24,0.2)',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

}
