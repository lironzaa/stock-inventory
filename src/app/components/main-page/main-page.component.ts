import { Component, OnInit } from '@angular/core';
import { StockItem } from './../../models/stock-item.model';
import { UpdateEvent } from './../stock-item-list/stock-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  stockItems: StockItem[] = new Array<StockItem>();
  totalStock: number = 0;
  constructor() { }

  ngOnInit() {
  }

  addStockItem(stockItem: StockItem): void {
    this.stockItems.push(stockItem);
    this.totalStock += stockItem.amount;
  }

  deleteItem(stockItem: StockItem): void {
    let index = this.stockItems.indexOf(stockItem);
    this.stockItems.splice(index, 1);
    this.totalStock -= stockItem.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    this.stockItems[this.stockItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalStock -= updateEvent.old.amount;
    this.totalStock += updateEvent.new.amount;
  }
}