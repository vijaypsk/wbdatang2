import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {IndicatorlistComponent} from './indicatorlist';
import {IndicatordataComponent} from './indicatordata';
import {DropdownComponent} from './dropdown';




@Component({
  moduleId: module.id,
  selector: 'wbstats-app',
  templateUrl: 'wbstats.component.html',
  styleUrls: ['wbstats.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES,MD_TABS_DIRECTIVES,MD_SIDENAV_DIRECTIVES,MD_TOOLBAR_DIRECTIVES,MD_ICON_DIRECTIVES,IndicatorlistComponent,IndicatordataComponent,DropdownComponent],
  providers: [ MdIconRegistry],
})
export class WbstatsAppComponent {
  title = 'World Bank Statistics!';
  indicatorCode='NY.GDP.MKTP.KD.ZG';
  indicatorName='GDP growth (annual %)';
  year="2000";
  dropdownValues=[{value:"2000",label:"2000"},{value:"2001",label:"2001"},{value:"2002",label:"2002"},
  {value:"2003",label:"2003"},{value:"2004",label:"2004"},{value:"2005",label:"2005"},
  {value:"2006",label:"2006"},{value:"2007",label:"2007"},{value:"2008",label:"2008"},
  {value:"2009",label:"2009"},{value:"2010",label:"2010"},{value:"2011",label:"2011"},{value:"2012",label:"2012"}
  ];
  
  action(val){
    console.log('Testing..'+val);
    this.year=val;
  }
}
