import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, retry} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';
import { Category, Note } from './model';

@Injectable({
  providedIn: 'root'
})
export class Service {

  base_path = 'http://laboweb.ecam.be/notepad_s4/public/index.php/api/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getListCategories(): Observable<Category> {
    return this.http
      .get<Category>(this.base_path + 'categories')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCategory(id): Observable<Category> {
    return this.http
      .get<Category>(this.base_path + 'categories/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateCategory(id, item): Observable<Category> {
    return this.http
      .put<Category>(this.base_path + 'categories/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteCategory(id){
      return this.http
        .delete<Category>(this.base_path + 'categories/' + id, this.httpOptions)
        .pipe(
          retry(2),
            catchError(this.handleError)
        )
  }

  createItemCategories(item): Observable<Category> {
    return this.http
      .post<Category>(this.base_path + 'categories', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getNotes(): Observable<Note> {
    return this.http
      .get<Note>(this.base_path + 'notes')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getNote(id): Observable<Note> {
    return this.http
      .get<Note>(this.base_path + 'notes/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateNote(id, item): Observable<Note> {
    return this.http
      .put<Note>(this.base_path + 'notes/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteNote(id) {
    return this.http
    .delete<Note>(this.base_path + 'notes/' + id, this.httpOptions)
    .pipe(
     retry(2),
      catchError(this.handleError)
    )
}

createNote(item): Observable<Note> {
  return this.http
    .post<Note>(this.base_path + 'notes', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

    // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}