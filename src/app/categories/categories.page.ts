import { Component, OnInit } from '@angular/core';
import { Category } from "../model";
import {Service} from '../service';
import {Router} from "@angular/router";
import { NavController } from "@ionic/angular";
import { AddcategoryPage } from "../addcategory/addcategory.page";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public data: JSON[] = [];

  constructor(
    private api: Service,
    private router : Router,
  ) { }

  ngOnInit() {
    this.api.getCategories().subscribe(urldata => {
      this.data = JSON.parse(JSON.stringify(urldata));
    });
    console.log(this.data)
  }

  nextpage() {
    this.router.navigate(['/addcategory']);
  }

}
