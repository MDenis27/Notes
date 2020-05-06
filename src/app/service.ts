import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';
import { Category } from './model';

@Injectable({
  providedIn: 'root'
})
export class Service {

    public ip = 'http://laboweb.ecam.be/notepad_s4/public/index.php/api/'

    constructor(private http: HttpClient, private router: Router) { }

    getCategories() {
        return this.http.get('http://laboweb.ecam.be/notepad_s4/public/index.php/api/categories').pipe(
            catchError(this.handelError));
      }

    getCategory(id : number) {
        return this.http.get(this.ip + 'categories/' + id).pipe(
            catchError(this.handelError));
    }

    CreateNewCategory(category: Category) {
      let url = this.ip + "categories";
        return this.http.post(url, Category).pipe(catchError(this.handelError));
    }

    handelError(err) {
        if (err instanceof HttpErrorResponse) {
          return throwError(err.error.error);
        } else {
          return throwError(err.message);
        }
      }
}