import { Component } from '@angular/core';
import { CustomerModel } from '../CustomerApp.model';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: [],
})
export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new CustomerModel(); // clear UI
  }
}
