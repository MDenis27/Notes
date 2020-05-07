import { Component, OnInit } from '@angular/core';
import { Note } from '../model';
import { Service } from '../service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.page.html',
  styleUrls: ['./createnote.page.scss'],
})
export class CreatenotePage implements OnInit {

  data: Note;
  categories: any;

  constructor(
    private api: Service,
    private toastController: ToastController,
    private router: Router
  ) { 
    this.data = new Note();
    this.categories = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.api.getListCategories().subscribe(response => {
      this.categories = response;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Note créée',
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    let JsonString = this.data.category.toString()
    this.data.category = JSON.parse(JsonString)
    this.api.createNote(this.data).subscribe((response) => {
      this.router.navigate(['notes']);
      this.presentToast()
    });
  }

}
