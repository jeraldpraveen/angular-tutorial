import { Component } from '@angular/core';
import { CustomerModel } from '../CustomerApp.model';
// import { ConsoleLogger, ILogger } from '../Utility/CustomerApp.Logger';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: [],
})
export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();
  // LogObject: ILogger = new ConsoleLogger();
  // constructor() {
  //   this.LogObject.Log();
  // }
  constructor(_logger: BaseLogger) {
    _logger.Log();
  }
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new CustomerModel(); // clear UI
  }
}
