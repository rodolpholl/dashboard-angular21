import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthorService } from '../../shared/services/features/cadastros/author';
import { DataGridComponent, ColumnDef } from '../../shared/components/dataGrid/data-grid';
import { ModalComponent } from '../../shared/components/ui/modal/modal';

@Component({
  selector: 'app-author',
  imports: [CommonModule, DataGridComponent, ModalComponent, ReactiveFormsModule],
  templateUrl: './author.html',
})
export class Author {
  private authorService = inject(AuthorService);
  private fb = inject(FormBuilder);

  // Usar signal diretamente para permitir .set()
  authors = signal<any[]>([]);

  columns = signal<ColumnDef[]>([
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'estiloPredominante', label: 'Estilo Predominante' },
    { key: 'actions', label: 'Ações', filterable: false, sortable: false }
  ]);

  // Modal State
  isModalOpen = signal(false);
  isEditMode = signal(false);
  isConfirmDeleteOpen = signal(false);
  authorToDelete = signal<any>(null);
  authorForm: FormGroup;
  
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
    'poesia'
  ];

  constructor() {
    this.authorForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      estiloPredominante: ['', Validators.required]
    });

    // Carregar autores ao inicializar o componente
    this.loadAuthors();
  }

  private loadAuthors() {
    this.authorService.getAuthors().subscribe({
      next: (data) => this.authors.set(data),
      error: (err) => console.error('Erro ao carregar autores:', err)
    });
  }

  openAddModal() {
    this.isEditMode.set(false);
    this.authorForm.reset();
    this.isModalOpen.set(true);
  }

  editAuthor(author: any) {
    this.isEditMode.set(true);
    this.authorForm.patchValue(author);
    this.isModalOpen.set(true);
  }

  deleteAuthor(author: any) {
    this.authorToDelete.set(author);
    this.isConfirmDeleteOpen.set(true);
  }

  confirmDelete() {
    const author = this.authorToDelete();
    if (author) {
      this.authorService.deleteAuthor(author).subscribe({
        next: () => {
          this.refreshAuthors();
          this.closeConfirmDelete();
        },
        error: (err) => console.error('Erro ao deletar autor:', err)
      });
    }
  }

  closeConfirmDelete() {
    this.isConfirmDeleteOpen.set(false);
    this.authorToDelete.set(null);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.authorForm.reset();
    this.isEditMode.set(false);
  }

  saveAuthor() {
    if (this.authorForm.valid) {
      const formData = this.authorForm.value;
      
      if (this.isEditMode()) {
        // Editar autor existente
        this.authorService.updateAuthor(formData).subscribe({
          next: () => {
            this.refreshAuthors();
            this.closeModal();
          },
          error: (err) => console.error('Erro ao atualizar autor:', err)
        });
      } else {
        // Criar novo autor
        this.authorService.createAuthor(formData).subscribe({
          next: () => {
            this.refreshAuthors();
            this.closeModal();
          },
          error: (err) => console.error('Erro ao criar autor:', err)
        });
      }
    }
  }

  private refreshAuthors() {
    this.authorService.getAuthors().subscribe({
      next: (data) => {
        // Atualizar o signal com os novos dados
        this.authors.set(data);
      },
      error: (err) => console.error('Erro ao carregar autores:', err)
    });
  }
}
