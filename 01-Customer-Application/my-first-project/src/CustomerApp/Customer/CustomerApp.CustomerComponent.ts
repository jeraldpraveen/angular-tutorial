import { Component, Injector } from '@angular/core';
import { CustomerModel } from '../CustomerApp.model';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: [],
})
export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();
  constructor(_injector: Injector, public http: HttpClient) {
    const injectorObject = _injector.get('1');
    injectorObject.Log();
  }
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new CustomerModel(); // clear UI
  }
  SelectCustomer(_selected: CustomerModel) {
    this.CustomerModel = _selected;
  }

  Error(res: any) {
    console.debug(res);
  }

  SuccessGet(res: any) {
    this.CustomerModels = res;
  }

  GetFromServer(r: any) {
    this.http
      .get('http://localhost:3000/Customers')
      .subscribe((res) => this.SuccessGet(res));
  }

  PostToServer() {
    // Create DTO Object
    var CustomerDTO: any = {};
    CustomerDTO.CustomerCode = this.CustomerModel.CustomerCode;
    CustomerDTO.CustomerName = this.CustomerModel.CustomerName;
    CustomerDTO.CustomerAmount = this.CustomerModel.CustomerAmount;
    this.http
      .post('http://localhost:3000/Customers', CustomerDTO)
      .subscribe((res) => this.GetFromServer(res));
  }
}
