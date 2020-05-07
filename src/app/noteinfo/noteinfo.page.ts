import { Component, OnInit } from '@angular/core';
import { Note, Category } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-noteinfo',
  templateUrl: './noteinfo.page.html',
  styleUrls: ['./noteinfo.page.scss'],
})
export class NoteinfoPage implements OnInit {

  id: number;
  data: Note;
  category: Category;
  stringCat: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: Service
  ) { 
    this.data = new Note();
    this.category = new Category();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.api.getNote(this.id).subscribe(response => {
    console.log(response.category);
    this.data = response;
    this.stringCat = JSON.stringify(this.data.category);
    this.category = JSON.parse(this.stringCat);
    })
  }

}
