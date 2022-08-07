import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforof-demo',
  templateUrl: './ngforof-demo.component.html',
  styleUrls: ['./ngforof-demo.component.css'],
})
export class NgforofDemoComponent implements OnInit {
  people: Array<any> = [];

  imgStyles: any = {
    height: '150px',
    'border-radius': '20px',
    'margin.px': 10,
  };

  constructor() {}

  ngOnInit(): void {
    this.people = [
      {
        name: 'Jerald',
        age: 29,
        city: 'Chennai',
        picture: '/assets/DSC_0313.JPG',
      },
      {
        name: 'Shirley',
        age: 27,
        city: 'Coimbatore',
        picture: '/assets/DSC_0200.JPG',
      },
      {
        name: 'Derrick',
        age: 2,
        city: 'Chennai',
        picture: '/assets/DSC_0555.JPG',
      },
      {
        name: 'Praveen',
        age: 29,
        city: 'Tirupur',
        picture: '/assets/DSC_0321.JPG',
      },
    ];
  }
}
