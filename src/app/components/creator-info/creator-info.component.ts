import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creator-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creator-info.component.html',
  styleUrl: './creator-info.component.css',
})
export class CreatorInfoComponent {
  @Input() creatorName = '';
  @Input() creationDate = '';
  @Input() isRTL = true;
}
