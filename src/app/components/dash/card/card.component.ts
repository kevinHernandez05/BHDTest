import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  _sliderPerView = 1.5;

  slideOpt ={
    direction: 'horizontal',
    slidesPerView: this._sliderPerView,
    pagination: {
      el: '.swiper-pagination',
    }
  }

  constructor() { }

  ngOnInit() {}

}
