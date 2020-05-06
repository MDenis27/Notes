import { Component, OnInit } from '@angular/core';
import { Category } from '../model';
import { Service } from '../service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.page.html',
  styleUrls: ['./addcategory.page.scss'],
})
export class AddcategoryPage implements OnInit {
  data: Category;

  constructor(
    public api: Service,
    public router: Router,
    public toastController: ToastController
  ) {
    this.data = new Category();
   }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Category created',
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    this.api.createItemCategories(this.data).subscribe((response) => {
      this.router.navigate(['categories']);
      this.presentToast();
    });

  }

}
