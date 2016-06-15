import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

export class DropdownValue {
  value:string;
  label:string;

  constructor(value:string,label:string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'app-dropdown',
  templateUrl: 'app/dropdown/dropdown.component.html',
  styleUrls: ['app/dropdown/dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  values: DropdownValue[];

  @Output()
  select = new EventEmitter();

  constructor() {
  }

  selectItem(value) {
    console.log('Dropdown....'+value);
    this.select.next(value);
  }

  ngOnInit() {
  }
  
  

}


