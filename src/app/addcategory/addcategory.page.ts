import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Category } from '../model';
import { Router } from '@angular/router';

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
    console.log(this.cat);
    const cati : Category = {
      Name: this.cat["name"],
    }
    this.api.CreateNewCategory(cati).subscribe(urldata=>{
      if(urldata['result']){
        this.router.navigate(['/categories']);
      }
    },error =>{
      this.error = error
    } );
  }

  constructor(
    private api: Service,
    private router : Router,
    ) { }

  ngOnInit() {
  }

}
