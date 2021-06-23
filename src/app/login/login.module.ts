import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';


/*components*/
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginformComponent } from './loginform/loginform.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
    SidebarComponent,
    LoginformComponent]
})
export class LoginPageModule {}
