import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light');
  theme$ = this.themeSubject.asObservable();
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor() {
    if (this.isBrowser) {
      const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
      this.setTheme(savedTheme);
    }
  }

  toggleTheme() {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme) {
    this.themeSubject.next(theme);
    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark:bg-gray-900');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark:bg-gray-900');
      }
    }
  }
}