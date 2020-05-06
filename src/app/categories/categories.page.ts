import { Component, OnInit } from '@angular/core';
import { Category } from "../model";
import {Service} from '../service';
import {Router} from "@angular/router";
import { NavController } from "@ionic/angular";
import { AddcategoryPage } from "../addcategory/addcategory.page";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  data: string;

  constructor(
    private api: Service,
    private router : Router,
    private http: HttpClient
  ) { this.data = ''; }

  ionViewWillEnter() {
    // Load the data
    this.prepareDataRequest()
      .subscribe(
        data => {
          // Set the data to display in the template
          this.data = JSON.parse(JSON.stringify(data));
        }
      );
  }

  ngOnInit() {
  }

  nextpage() {
    this.router.navigate(['/addcategory']);
  }

  private prepareDataRequest(): Observable<object> {
    // Define the data URL
    const dataUrl = 'http://laboweb.ecam.be/notepad_s4/public/index.php/api/categories';
    // Prepare the request
    return this.http.get(dataUrl);
  }

}
