import { Component, OnInit } from '@angular/core';
import { Note } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.page.html',
  styleUrls: ['./editnote.page.scss'],
})
export class EditnotePage implements OnInit {

  id: number;
  data: Note;
  categories: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: Service,
    private toastController: ToastController
  ) { 
    this.data = new Note();
    this.categories = [];
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.getCategories();
    this.api.getNote(this.id).subscribe(response => {
      this.data = response;
    })
  }

  getCategories() {
    this.api.getListCategories().subscribe(response => {
      this.categories = response;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Note modifiée',
      duration: 2000
    });
    toast.present();
  }

  update() {
    let JsonString = this.data.category.toString()
    this.data.category = JSON.parse(JsonString)
    this.api.updateNote(this.id, this.data).subscribe(response => {
      this.router.navigate(['notes']);
      this.presentToast();
    })
  }

}
