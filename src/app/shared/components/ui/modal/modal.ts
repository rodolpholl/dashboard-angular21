import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html'
})
export class ModalComponent {
  isOpen = input.required<boolean>();
  title = input<string>('');
  close = output<void>();

  onClose() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement) === event.currentTarget) {
      this.onClose();
    }
  }
}