import { Component, Injector } from '@angular/core';
import { CustomerModel } from '../CustomerApp.model';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: [],
})
export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();
  constructor(_injector: Injector) {
    const injectorObject = _injector.get('1');
    injectorObject.Log();
  }
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new CustomerModel(); // clear UI
  }
}
