import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.html',
})
export class Dropdown {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Input() className = '';

  @ViewChild('dropdownRef') dropdownRef!: ElementRef<HTMLDivElement>;
  
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private handleClickOutside = (event: MouseEvent) => {
    if (
      this.isOpen &&
      this.dropdownRef &&
      this.dropdownRef.nativeElement &&
      !this.dropdownRef.nativeElement.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('.dropdown-toggle')
    ) {
      this.close.emit();
    }
  };

  ngAfterViewInit() {
    if (this.isBrowser) {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }
}
