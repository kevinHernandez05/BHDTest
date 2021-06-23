import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})

export class DashPage implements OnInit {

  _sliderPerView = 1.5;

  slideOpt ={
    direction: 'horizontal',
    slidesPerView: this._sliderPerView,
    pagination: {
      el: '.swiper-pagination',
    }
  }

  private pageTitle: string = "Mis Productos";


  constructor() { }


  ngOnInit() {
  }

  private getPageTitle() {
    return this.pageTitle;
  }

}
