import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeader } from '../app-header/app-header';
import { AppSidebar } from '../app-sidebar/app-sidebar';
import { Backdrop } from '../backdrop/backdrop';
import { SidebarService } from '../../services/sidebar';
import { LoadingOverlayComponent } from '../../components/ui/loading-overlay/loading-overlay.component';

@Component({
  selector: 'app-app-layout',
  imports: [
    CommonModule,
    RouterModule,
    AppHeader,
    AppSidebar,
    Backdrop,
    LoadingOverlayComponent
  ],
  templateUrl: './app-layout.html',
})
export class AppLayout {
   readonly isExpanded$;
  readonly isHovered$;
  readonly isMobileOpen$;

  constructor(public sidebarService: SidebarService) {
    this.isExpanded$ = this.sidebarService.isExpanded$;
    this.isHovered$ = this.sidebarService.isHovered$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }

  get containerClasses() {
    return [
      'flex-1',
      'transition-all',
      'duration-300',
      'ease-in-out',
      (this.isExpanded$ || this.isHovered$) ? 'xl:ml-[290px]' : 'xl:ml-[90px]',
      this.isMobileOpen$ ? 'ml-0' : ''
    ];
  }
}
