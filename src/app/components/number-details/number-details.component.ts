import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardService } from '../../services/clipboard.service';
import { NumberDetails } from '../../models/number.model';
import { MenuItem } from 'primeng/api';
import { MenuModule, Menu } from 'primeng/menu';

@Component({
  selector: 'app-number-details',
  standalone: true,
  imports: [CommonModule, MenuModule],
  templateUrl: './number-details.component.html',
  styleUrl: './number-details.component.css',
})
export class NumberDetailsComponent {
  @Input() details!: NumberDetails;
  @Input() isRTL = true;
  @Output() numberCopied = new EventEmitter<boolean>();

  menuOpen = false

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onEdit() {
    console.log('Edit clicked');
    this.menuOpen = false;
  }

  onDelete() {
    console.log('Delete clicked');
    this.menuOpen = false;
  }

  constructor(private clipBoardServices: ClipboardService) {}

  copyNumber() {
    const success = this.clipBoardServices.copyToCilbord(this.details.id);
    this.numberCopied.emit(success);
  }
}
