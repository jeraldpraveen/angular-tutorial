import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './Customer.component';

@NgModule({
  declarations: [CustomerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}