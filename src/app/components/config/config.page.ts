import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  private pageTitle: string = "Configuración";

  constructor() { }


  ngOnInit() {
  }

  private getPageTitle() {
    return this.pageTitle;
  }
}
