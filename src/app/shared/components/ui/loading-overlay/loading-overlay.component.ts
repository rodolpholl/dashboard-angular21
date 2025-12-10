import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../services/loading';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loadingService.isLoading()) {
      <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 backdrop-blur-sm dark:bg-gray-900/50">
        <div class="flex flex-col items-center gap-3">
          <div class="h-10 w-10 animate-spin rounded-full border-4 border-brand-500 border-t-transparent"></div>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Carregando...</span>
        </div>
      </div>
    }
  `
})
export class LoadingOverlayComponent {
  loadingService = inject(LoadingService);
}
