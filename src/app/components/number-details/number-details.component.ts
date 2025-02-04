import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardService } from '../../services/clipboard.service';
import { NumberDetails } from '../../models/number.model';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'app-number-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-details.component.html',
  styleUrl: './number-details.component.css',
})
export class NumberDetailsComponent {
  @Input() details!: NumberDetails;
  @Input() isRTL = true;
  @Output() numberCopied = new EventEmitter<boolean>();

  constructor(private clipBoardServices: ClipboardService) {}

  copyNumber() {
    const success = this.clipBoardServices.copyToCilbord(this.details.id);
    this.numberCopied.emit(success);
  }
}
