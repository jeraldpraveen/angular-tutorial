import { Component } from '@angular/core';
import { Customer } from './Customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './Customer.view.html',
  styleUrls: [],
})
export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); // clear UI
  }
}
