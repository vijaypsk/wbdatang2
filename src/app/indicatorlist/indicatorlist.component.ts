import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service';
import {IndicatorDef} from '../indicatordef.component';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';


@Component({
  selector: 'app-indicatorlist',
  templateUrl: 'app/indicatorlist/indicatorlist.component.html',
  styleUrls: ['app/indicatorlist/indicatorlist.component.css'],
  providers: [MD_CARD_DIRECTIVES,DataService],

})
export class IndicatorlistComponent implements OnInit {
  indicators: IndicatorDef[];
  @Output()
  icode = new EventEmitter();
  @Output()
  iname = new EventEmitter();

    constructor(private dataService: DataService){}
  
   ngOnInit() {
      this.dataService.getData().subscribe(d => {
          this.indicators = d;
      });
   }
   
   getData(code,name) {
     //console.log(code);
     this.icode.next(code);
     this.iname.next(name);

   }


}
