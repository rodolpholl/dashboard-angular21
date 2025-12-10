import { Component, input, signal, computed, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ColumnDef {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'boolean';
  sortable?: boolean;
  filterable?: boolean;
}

interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-grid.html',
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class DataGridComponent {
  data = input<any[]>([]);
  columns = input<ColumnDef[]>([]);
  title = input<string>('');
  templates = input<Record<string, TemplateRef<any>>>({});

  protected Math = Math;

  // State
  sortConfig = signal<SortConfig | null>(null);
  pageSize = signal<number>(10);
  currentPage = signal<number>(1);
  filters = signal<Record<string, string>>({});
  
  // UI State for filter inputs visibility
  activeFilterColumn = signal<string | null>(null);

  // Computed
  processedData = computed(() => {
    let result = [...this.data()];
    const currentFilters = this.filters();
    const currentSort = this.sortConfig();

    // 1. Filter
    Object.keys(currentFilters).forEach(key => {
      const filterValue = currentFilters[key].toLowerCase();
      if (filterValue) {
        result = result.filter(item => {
          const val = item[key];
          return String(val).toLowerCase().includes(filterValue);
        });
      }
    });

    // 2. Sort
    if (currentSort) {
      result.sort((a, b) => {
        const valA = a[currentSort.key];
        const valB = b[currentSort.key];
        
        if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
        if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  });

  paginatedData = computed(() => {
    const data = this.processedData();
    const size = this.pageSize();
    const page = this.currentPage();
    const start = (page - 1) * size;
    return data.slice(start, start + size);
  });

  totalItems = computed(() => this.processedData().length);
  totalPages = computed(() => Math.ceil(this.totalItems() / this.pageSize()));

  // Actions
  toggleSort(key: string) {
    const current = this.sortConfig();
    if (current?.key === key) {
      if (current.direction === 'asc') {
        this.sortConfig.set({ key, direction: 'desc' });
      } else {
        this.sortConfig.set(null);
      }
    } else {
      this.sortConfig.set({ key, direction: 'asc' });
    }
  }

  toggleFilter(key: string) {
    if (this.activeFilterColumn() === key) {
      this.activeFilterColumn.set(null);
    } else {
      this.activeFilterColumn.set(key);
    }
  }

  updateFilter(key: string, value: string) {
    this.filters.update(f => ({ ...f, [key]: value }));
    this.currentPage.set(1); // Reset to first page on filter
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  setPageSize(size: number | string) {
    this.pageSize.set(Number(size));
    this.currentPage.set(1);
  }
  
  get pagesArray() {
    // Simple pagination logic to show some page numbers
    const total = this.totalPages();
    const current = this.currentPage();
    const delta = 2;
    const range = [];
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i);
    }
    if (current - delta > 2) range.unshift('...');
    if (current + delta < total - 1) range.push('...');
    range.unshift(1);
    if (total > 1) range.push(total);
    return range;
  }
}
