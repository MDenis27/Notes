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
  notes: any;
  note: any;

  constructor(
    private api: Service,
    private toastController: ToastController,
  ) { 
    this.categories = [];
    this.notes = [];
    this.note = [];
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCategories();
    this.getNotes();
  }

  getCategories() {
    this.api.getListCategories().subscribe(response => {
      this.categories = response;
    })
  }

  getNotes() {
    this.api.getNotes().subscribe(response => {
      this.notes = response;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Category deleted',
      duration: 2000
    });
    toast.present();
  }

  delete(item) {
    this.notes.forEach(element => {
      console.log(element)
      if(item.id == element.category.id){
        this.api.deleteNote(element.id).subscribe(Response => {
        });
      }
    });
    this.api.deleteCategory(item.id).subscribe(Response => {
      this.getCategories();
      this.getNotes();
      this.presentToast()
    });
  }

}
