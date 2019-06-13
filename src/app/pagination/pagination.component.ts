import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.scss' ]
})
export class PaginationComponent  {
  @Input() pages: number;
  @Input() currentPage: number;
  @Output() searchEvent = new EventEmitter();

  constructor(){}

  navigatePage(page) {
    console.log(page);
    this.searchEvent.emit(page);
  }

}
