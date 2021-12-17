import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

// Best place to add validaton is Model....
// Formgroup --> FormBuilder --> FormControl --> Validators
export class Customer {
  CustomerCode: string = '';
  CustomerName: string = '';
  CustomerAmount: number = 0;

  formCustomerGroup: FormGroup; // Create obj of FormGroup
  constructor() {
    var _builder = new FormBuilder();
    this.formCustomerGroup = _builder.group({});
    //Inputs In Screen(Controls) --> Write Validations
    //Name Input --> One Validation(required)
    this.formCustomerGroup.addControl(
      'CustomerNameControl',
      new FormControl('', Validators.required)
    );
    // Code Input ---> Two Validations(required,4 letter numerics only)
    var validationCollection = [];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));
    this.formCustomerGroup.addControl(
      'CustomerCodeControl',
      new FormControl('', Validators.compose(validationCollection))
    );
  }
}

// Validation has 3 steps
// create : We create the validaton Object Model
// Connect : We connect the validation to UI
// Check : IsItValid,IsItDirty ???
