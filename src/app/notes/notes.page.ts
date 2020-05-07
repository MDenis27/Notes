import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes : any;

  constructor(
    private api: Service,
    private toastController: ToastController
  ) { this.notes = []}

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Note deleted',
      duration: 2000
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.getNotes();
  }

  getNotes() {
    this.api.getNotes().subscribe(response => {
      this.notes = response;
    })
  }

  delete(item) {
    this.api.deleteNote(item.id).subscribe(_Response => {
      this.getNotes();
      this.presentToast()
    });
  }

  

}
