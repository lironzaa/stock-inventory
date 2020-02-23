import { Component, OnInit, Inject } from '@angular/core';
import { StockItem } from './../../models/stock-item.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: StockItem) { }

  ngOnInit() {
  }

  onSubmit(stockItem: StockItem): void {
    this.dialogRef.close(stockItem);
  }

}