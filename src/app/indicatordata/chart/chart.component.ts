import {Component, Input, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from 'ng2-nvd3';
declare let d3: any;

@Component({
  moduleId: module.id,
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css'],
  directives: [nvD3],
})
export class ChartComponent implements OnInit {
  options;
  @Input() data;
  constructor() {
  }

  @ViewChild(nvD3)
  nvD3: nvD3;

  ngOnInit(){
    this.options = {chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 155
        },
        x: function(d){return d.cname.substring(0,15);},
        y: function(d){return d.value;},
       
        showControls: true,
     
        valueFormat: function(d){
          return d3.format(',.5f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Country/Region',
          orient: 'bottom',
          stroke: '#000'
        },
        yAxis: {
          axisLabel: 'Value  (Non-Zero values)',
          axisLabelDistance: 70,
        }
      }};
  }

  ngAfterViewInit() {
    // this.nvD3 - directive instance
    // for example, to update the chart
    this.nvD3.chart.update()
  } 

}
