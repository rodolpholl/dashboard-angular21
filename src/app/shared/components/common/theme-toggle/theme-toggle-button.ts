import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: 'theme-toggle-button.html',
  imports:[CommonModule]
})
export class ThemeToggleButtonComponent {
  
  theme$;

  constructor(private themeService: ThemeService) {
    this.theme$ = this.themeService.theme$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}