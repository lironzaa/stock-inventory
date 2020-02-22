import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockItem } from './../../models/stock-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() stockItem: StockItem = new StockItem('', null);
  @Output() formSubmit: EventEmitter<StockItem> = new EventEmitter<StockItem>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
  }

}