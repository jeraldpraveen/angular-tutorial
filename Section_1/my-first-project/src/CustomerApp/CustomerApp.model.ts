import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

export class Customer {
  CustomerCode: string = '';
  CustomerName: string = '';
  CustomerAmount: number = 0;

  formCustomerGroup: FormGroup; // Create obj of FormGroup
  constructor() {
    var _builder = new FormBuilder();
    this.formCustomerGroup = _builder.group({});
  }
}

// Validation has 3 steps
// create : We create the validaton Object Model
// Connect : We connect the validation to UI
// Check : IsItValid,IsItDirty ???
