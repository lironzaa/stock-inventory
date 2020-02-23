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

  addStockItem(stockItem: StockItem): void {
    this.stockItems.push(stockItem);
  }

  deleteItem(stockItem: StockItem): void {
    let index = this.stockItems.indexOf(stockItem);
    this.stockItems.splice(index, 1);
  }

}