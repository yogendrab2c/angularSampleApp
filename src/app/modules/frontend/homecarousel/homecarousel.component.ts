import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-homecarousel',
  templateUrl: './homecarousel.component.html',
  styleUrls: ['./homecarousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: false } }
  ]
})
export class HomecarouselComponent implements OnInit {
  slides=[
  {
   "title":"First slide label",
   "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
    "url":"",
    "image":"https://dw8stlw9qt0iz.cloudfront.net/dKL_-v5LySrzAsb83ifQludqFHQ=/2000x2000/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/thumbnail/standard/4b77d2f4-20d5-4394-fdde-994322566c79.png"
  },
  {
    "title":"Second slide label",
    "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
     "url":"",
     "image":"https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/09/Taj-Mahal.jpg"
   },
   {
    "title":"Third slide label",
    "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
     "url":"",
     "image":"https://www.holidify.com/images/cmsuploads/compressed/Taj_mahal_in_independence_day_20171024202456.jpg"
   }
  
];
  constructor() { }

  ngOnInit() {

  }

}
