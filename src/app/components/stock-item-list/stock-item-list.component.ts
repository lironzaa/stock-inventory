import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StockItem } from './../../models/stock-item.model';
import { MatDialog } from '@angular/material';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.scss']
})
export class StockItemListComponent implements OnInit {
  @Input() stockItems: StockItem[];
  @Output() deleteItem: EventEmitter<StockItem> = new EventEmitter<StockItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteItem(item: StockItem): void {
    this.deleteItem.emit(item);
  }

  onCardClicked(item: StockItem): void {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.stockItems[this.stockItems.indexOf(item)] = result;
      }
    })
  }

}