// transactions-table.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/number.model';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent {
  @Input() transactions: Transaction[] = [];
  @Input() isRTL = true;
  @Output() pageChange = new EventEmitter<number>();
  
  currentPage = 1;

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.pageChange.emit(newPage);
  }
}