import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StockItem } from './../../../models/stock-item.model';

@Component({
  selector: 'app-stock-item-card',
  templateUrl: './stock-item-card.component.html',
  styleUrls: ['./stock-item-card.component.scss']
})
export class StockItemCardComponent implements OnInit {
  @Input() stockItem: StockItem;
  @Output() deleteButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onDeleteButtonClick(): void {
    this.deleteButtonClicked.emit();
  }

  onCardClicked(): void {
    console.log('clicked');
    this.cardClicked.emit();
  }
}