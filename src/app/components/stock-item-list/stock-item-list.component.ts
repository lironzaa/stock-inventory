import { Component, OnInit, Input } from '@angular/core';
import { StockItem } from './../../models/stock-item.model';

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.scss']
})
export class StockItemListComponent implements OnInit {
  @Input() stockItems: StockItem[];

  constructor() { }

  ngOnInit() {
  }

}
