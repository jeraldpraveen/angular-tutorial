import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './Customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
