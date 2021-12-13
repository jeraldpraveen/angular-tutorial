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
}
