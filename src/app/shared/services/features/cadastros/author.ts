import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

export interface Author {
  id: number;
  navigationId: string;
  name: string;
  email: string;
  estiloPredominante: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private http = inject(HttpClient);
  //private apiUrl = `${environment.apiUrl}/author?key=${environment.apiKey}`;
  private apiUrl = `${environment.apiUrl}/authors`;

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${id}`);
  }

  createAuthor(author: Partial<Author>): Observable<Author> {

    return this.http.post<Author>(`${this.apiUrl}`, author);
  }

  updateAuthor(author: Partial<Author>): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${author.id}`, author);
  }

  deleteAuthor(author: Partial<Author>): Observable<Author> {
    return this.http.delete<Author>(`${this.apiUrl}/${author.id}`);
  }
}
