import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  private pageTitle: string = "Configuración";

  constructor(private auth: AuthService) { }


  ngOnInit() {
  }

  private getPageTitle() {
    return this.pageTitle;
  }

  logout(){
    this.auth.logout();
  }
}
