import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";
@Component({
  selector: 'app-multipurposeslider',
  templateUrl: './multipurposeslider.component.html',
  styleUrls: ['./multipurposeslider.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ]
})


export class MultipurposesliderComponent implements OnInit {
  mpurpose_slides=[
    {
     "title":"First slide label njnjnh",
     "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
      "url":"",
      "image":"https://dw8stlw9qt0iz.cloudfront.net/dKL_-v5LySrzAsb83ifQludqFHQ=/2000x2000/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/thumbnail/standard/4b77d2f4-20d5-4394-fdde-994322566c79.png"
    },
    {
      "title":"Second slide label",
      "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
       "url":"",
       "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo46fJ1WyQHEmnEfooBTc_gVctAntvCmIoXzSR5fLsHLKyhfOL&amp;usqp=CAU"
     },
     {
      "title":"Third slide label",
      "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
       "url":"",
       "image":"https://cdn.civitatis.com/india/agra/galeria/taj-mahal-agra.jpg"
     },
     {
      "title":"Fourth slide label",
      "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
       "url":"",
       "image":"https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/3x2/ViewoftheGatewayofIndia-3x2.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
     },
     {
      "title":"Fifth slide label",
      "description":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
       "url":"",
       "image":"https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/16x7/AAG_27642205-H1-015Pooside-16x7.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
     }
  ];
  constructor() { }

  ngOnInit() {
  }

}
