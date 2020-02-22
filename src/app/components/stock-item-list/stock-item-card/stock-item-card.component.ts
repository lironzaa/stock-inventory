import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-item-card',
  templateUrl: './stock-item-card.component.html',
  styleUrls: ['./stock-item-card.component.scss']
})
export class StockItemCardComponent implements OnInit {
  @Input() isInStock: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
