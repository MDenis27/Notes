import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteinfoPageRoutingModule } from './noteinfo-routing.module';

import { NoteinfoPage } from './noteinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteinfoPageRoutingModule
  ],
  declarations: [NoteinfoPage]
})
export class NoteinfoPageModule {}
