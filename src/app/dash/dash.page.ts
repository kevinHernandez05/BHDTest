import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  slideOpt ={
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  }

  constructor() { }


  ngOnInit() {
  }

}
