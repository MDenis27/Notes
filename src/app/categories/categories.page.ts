import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    private router: Router,
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
      console.log(response);
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


  nextpage() {
    this.router.navigate(['/addcategory']);
  }

}
