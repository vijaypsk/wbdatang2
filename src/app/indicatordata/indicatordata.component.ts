import { Component, OnInit, OnChanges, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {DataService} from '../data.service';
import {Result} from './result.component';
//import {nvD3} from '//cdn.rawgit.com/krispo/ng2-nvd3/v1.1.0/lib/ng2-nvd3.ts';
//import {nvD3} from 'ng2-nvd3';

//declare let d3: any;


@Component({
  selector: 'app-indicatordata',
  templateUrl: 'app/indicatordata/indicatordata.component.html',
  styleUrls: ['app/indicatordata/indicatordata.component.css'],
  providers: [DataService],
  inputs: ['indCode','year'],
  directives: [MD_GRID_LIST_DIRECTIVES, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TABS_DIRECTIVES,],
})

export class IndicatordataComponent implements OnInit, OnChanges, AfterViewInit {
  results: Result[];
  indCode: string;
  year: string;
  


  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.indCode);
    this.dataService.getResultData(this.indCode,this.year).subscribe(d => {
      this.results = d;
      //console.log(d);
    });
    
    
  }

  ngOnChanges(...args: any[]) {
    console.log(this.indCode);
    this.dataService.getResultData(this.indCode,this.year).subscribe(d => {
      this.results = d;
      //console.log(d);
    });
    
    
    

  }

  ngAfterViewInit() {
    //console.log(this.chartC.nativeElement.id);
  }

}
