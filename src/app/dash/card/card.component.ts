import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }

  ngOnInit() {}

}
