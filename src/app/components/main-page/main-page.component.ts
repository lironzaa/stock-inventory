import { Component, OnInit } from '@angular/core';
import { StockItem } from './../../models/stock-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  stockItems: StockItem[] = new Array<StockItem>();

  constructor() { }

  ngOnInit() {
  }

  addStockItem(stockItem: StockItem) {
    this.stockItems.push(stockItem);
  }

}