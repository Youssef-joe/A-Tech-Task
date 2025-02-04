import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDetails, Transaction } from '../../models/number.model';
import { NumberDetailsComponent } from '../number-details/number-details.component';
import { TransactionsTableComponent } from '../transactions-table/transactions-table.component';
import { CreatorInfoComponent } from '../creator-info/creator-info.component';

@Component({
  selector: 'app-number-parent',
  standalone: true,
  imports: [
    CommonModule,
    NumberDetailsComponent,
    TransactionsTableComponent,
    CreatorInfoComponent,
  ],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.css',
})
export class NumberParentComponent {
  @Output() close = new EventEmitter<void>();
  @Output() paginate = new EventEmitter<number>();
  @Output() copySuccess = new EventEmitter<boolean>();

  isRTL = true;
  numberDetails: NumberDetails = {
    id: '01234567890',
    name: 'موظف تجربة',
    country: 'المملكة العربية السعودية',
    status: 'نشط',
    currentBalance: 5000,
    availableBalance: 5000,
    usedBalance: 5000,
  };

  transactions: Transaction[] = [
    {
      id: 1,
      description: 'عبدالرحمن اسماعيل الكاتب',
      amount: 61890,
      quantity: 122,
      total: 7654,
      startDate: '01/12/2024',
      endDate: '01/12/2024',
      company: 'الشركة الفلانية للكتابة',
    },
  ];

  creatorName = 'عبدالرحمن اسماعيل الكاتب';
  creationDate = '01/12/2024 04:30 م';

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }

  closeModal() {
    this.close.emit();
  }

  onPageChange(page: number) {
    this.paginate.emit(page);
  }

  onNumberCopied(success: boolean) {
    this.copySuccess.emit(success);
  }
}
