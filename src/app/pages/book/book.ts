import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ColumnDef, DataGridComponent } from '../../shared/components/dataGrid/data-grid';
import { ModalComponent } from '../../shared/components/ui/modal/modal';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorService } from '../../shared/services/features/cadastros/author';

@Component({
  selector: 'app-book',
  imports: [CommonModule, DataGridComponent, ModalComponent, ReactiveFormsModule],
  templateUrl: 'book.html',
})
export class Book {
  private authorService = inject(AuthorService);
  private fb = inject(FormBuilder);

  estilos = [
    'romance',
    'aventura',
    'ação',
    'ficção científica',
    'documentário',
    'auto-ajuda',
    'arte',
    'filosofia',
    'fantasia',
    'poesia',
  ];

  authors = signal<any[]>([]);
  selectedAuthorId = signal<number | null>(null);
  books = signal<any[]>([]);

  columns = signal<ColumnDef[]>([
    { key: 'nome', label: 'Nome' },
    { key: 'isbn', label: 'ISBN' },
    { key: 'numPaginas', label: 'Núm. Páginas' },
    { key: 'estilo', label: 'Estilo' },
    { key: 'publicAlvo', label: 'Public Alvo' },
    { key: 'actions', label: 'Ações', filterable: false, sortable: false },
  ]);

  isModalOpen = signal(false);
  isEditMode = signal(false);
  isConfirmDeleteOpen = signal(false);
  isAddButtonEnable = signal(false);
  bookToDelete = signal<any>(null);
  bookForm: FormGroup;

  constructor() {
    this.bookForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      isbn: ['', Validators.required],
      numPaginas: ['', Validators.required],
      estilo: ['', Validators.required],
      publicAlvo: ['', Validators.required],
      sinopse: [''],
    });

    this.loadAuthors();
  }

  private loadAuthors() {
    this.authorService.getAuthors().subscribe({
      next: (data) => this.authors.set(data),
      error: (err) => console.error('Erro ao carregar autores:', err),
    });
  }

  onAuthorChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const authorId = Number(target.value);
    this.selectedAuthorId.set(authorId);
    this.isAddButtonEnable.set(true);

    const author = this.authors().find((a) => a.id === authorId);
    if (author && author.books) {
      this.books.set(author.books);
    } else {
      this.books.set([]);
    }
  }

  saveBook() {
    if (this.isEditMode()) {
      this.updateBook();
    } else {
      this.addBook();
    }
  }

  addBook() {}

  updateBook() {}

  openAddModal() {
    this.isEditMode.set(false);
    this.bookForm.reset();
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.bookForm.reset();
    this.isEditMode.set(false);
  }
}
