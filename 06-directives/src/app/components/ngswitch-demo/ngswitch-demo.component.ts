import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css'],
})
export class NgswitchDemoComponent implements OnInit {
  choice = 1;
  constructor() {}

  ngOnInit(): void {
    if (sessionStorage['userChoice']) {
      this.choice = sessionStorage['userChoice'];
    } else {
      this.choice = 1;
    }
  }

  setChoice(choice: number) {
    this.choice = choice;
    sessionStorage['userChoice'] = choice;
  }
}
