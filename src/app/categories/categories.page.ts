import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any;

  constructor(
    private api: Service,
    private toastController: ToastController,
  ) { this.categories = []; }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllCategories();
  }

  getAllCategories() {
    //Get saved list of notes
    this.api.getListCategories().subscribe(response => {
      this.categories = response;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Category deleted',
      duration: 2000
    });
    toast.present();
  }

}
