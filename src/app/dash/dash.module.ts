import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashPageRoutingModule } from './dash-routing.module';

import { DashPage } from './dash.page';

/*Componentes*/

import { CardComponent } from './card/card.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashPageRoutingModule
  ],
  declarations: [
    DashPage,
    CardComponent ]
})
export class DashPageModule {}
