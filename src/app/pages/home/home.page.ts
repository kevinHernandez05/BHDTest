import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private pageTitle: string = "Inicio";

  constructor() {}

  private getPageTitle() {
    return this.pageTitle;
  }
}
