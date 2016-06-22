import { Component, OnInit, OnChanges, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {DataService} from '../data.service';
import {Result} from './result.component';
import {ChartComponent} from './chart/chart.component';


@Component({
  selector: 'app-indicatordata',
  templateUrl: 'app/indicatordata/indicatordata.component.html',
  styleUrls: ['app/indicatordata/indicatordata.component.css'],
  providers: [DataService],
  inputs: ['indCode','year'],
  directives: [MD_GRID_LIST_DIRECTIVES, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TABS_DIRECTIVES,ChartComponent,],
})

export class IndicatordataComponent implements OnInit, OnChanges, AfterViewInit {
  results: Result[];
  indCode: string;
  year: string;
  chartTop10Data: any;
  chartBottom10Data: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.indCode);
    this.dataService.getResultData(this.indCode,this.year).subscribe(d => {
      this.results = d;
      this.populateChartData();
      //console.log(d);
    });
    
    
  }

  ngOnChanges(...args: any[]) {
    console.log(this.indCode);
    this.dataService.getResultData(this.indCode,this.year).subscribe(d => {
      this.results = d;
      this.populateChartData();
      //console.log(d);
    });
    
    
    

  }

  ngAfterViewInit() {
    //console.log(this.chartC.nativeElement.id);
  }


  private populateChartData() {
    this.populateTop10();
    this.populateBottom10();
  }

  private populateTop10(){
    let cData = [];
    for (let i = 0;i<10;i++){
       let cd = {"cname":this.results[i].cname,"value":this.results[i].value};
       cData.push(cd);
    }
    this.chartTop10Data = [];
    console.log(this.chartTop10Data);
    this.chartTop10Data.push({key:this.indCode,values:cData});
  }


  private populateBottom10(){
    let cData = [];
    for (let i = this.results.length-1,j=0;j<10;i--){
       if(this.results[i].value!=0)
       {
        let cd = {"cname":this.results[i].cname,"value":this.results[i].value};
        cData.push(cd);
        j++;
       }
    }
    this.chartBottom10Data = [];
    console.log(this.chartBottom10Data);
    this.chartBottom10Data.push({key:this.indCode,values:cData});
  }

  

}
