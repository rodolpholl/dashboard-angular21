import { Component, ElementRef, ViewChild, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SidebarService } from '../../services/sidebar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ThemeToggleButtonComponent} from '../../components/common/theme-toggle/theme-toggle-button';
import { NotificationDropdown } from '../../components/header/notification-dropdown/notification-dropdown';
import { UserDropdown } from '../../components/header/user-dropdown/user-dropdown';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    ThemeToggleButtonComponent,
    NotificationDropdown,
    UserDropdown,
  ],
  templateUrl: './app-header.html',
})
export class AppHeader {
  isApplicationMenuOpen = false;
  readonly isMobileOpen$;

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor(public sidebarService: SidebarService) {
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }

  handleToggle() {
    if (this.isBrowser && window.innerWidth >= 1280) {
      this.sidebarService.toggleExpanded();
    } else {
      this.sidebarService.toggleMobileOpen();
    }
  }

  toggleApplicationMenu() {
    this.isApplicationMenuOpen = !this.isApplicationMenuOpen;
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      this.searchInput?.nativeElement.focus();
    }
  };
}
