import { Component, OnInit, Input } from '@angular/core';
import { StockItem } from './../../../models/stock-item.model';

@Component({
  selector: 'app-stock-item-card',
  templateUrl: './stock-item-card.component.html',
  styleUrls: ['./stock-item-card.component.scss']
})
export class StockItemCardComponent implements OnInit {
  @Input() item: StockItem
  constructor() { }

  ngOnInit() {
  }

}
