import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar';

@Component({
  selector: 'app-backdrop',
  imports: [
    CommonModule
  ],
  templateUrl: './backdrop.html',
})
export class Backdrop {
  readonly isMobileOpen$;

  constructor(private sidebarService: SidebarService) {
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }

  closeSidebar() {
    this.sidebarService.setMobileOpen(false);
  }
}
