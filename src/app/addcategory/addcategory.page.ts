import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Category } from '../model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.page.html',
  styleUrls: ['./addcategory.page.scss'],
  template: `
    <form (ngSubmit)="logForm()">
      <ion-row>
        <ion-item>
          <ion-label>Name:</ion-label>
          <ion-input type="text" [(ngModel)]="cat.name" name="name"></ion-input>
        </ion-item>
        <ion-button type="submit" block>
          <ion-icon slot="icon-only" name="add-circle"></ion-icon>
        </ion-button>
      </ion-row>
    </form>
  `,
})
export class AddcategoryPage implements OnInit {
  cat = {}
  public error: any;

  logForm() {
  }

  constructor(
    private api: Service,
    private router : Router,
    public httpClient: HttpClient
    ) { }

  ngOnInit() {
  }

}
