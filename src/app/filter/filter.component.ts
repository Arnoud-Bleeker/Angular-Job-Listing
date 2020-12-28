import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filters? : string[];
  @Output() clear = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clearFilter(filter : string){
    this.clear.emit(filter);
  }

}
