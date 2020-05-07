import { Component, OnInit } from '@angular/core';
import { Category } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.page.html',
  styleUrls: ['./editcategory.page.scss'],
})
export class EditcategoryPage implements OnInit {

  id: number;
  data: Category;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public api: Service,
    public toastController: ToastController
  ) { this.data = new Category() }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.api.getCategory(this.id).subscribe(response => {
      this.data = response;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Catégorie modifiée',
      duration: 2000
    });
    toast.present();
  }

  update() {
    //Update item by taking id and updated data object
    this.api.updateCategory(this.id, this.data).subscribe(response => {
      this.router.navigate(['categories']);
      this.presentToast();
    })
  }

}
