import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact!: Contact;

  constructor() {}

  ngOnInit(): void {
    this.contact = new Contact();
    this.contact.id = 1;
    this.contact.firstName = 'Jerald';
    this.contact.lastName = 'Praveen';
    this.contact.email = 'jerald.vit@gmail.com';
    this.contact.phone = '9843311777';
    this.contact.dob = '1993-04-27';
    this.contact.state = 'Tamil Nadu';
    this.contact.city = 'Chennai';
  }
}
