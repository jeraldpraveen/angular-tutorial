import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';

@NgModule({
  declarations: [CustomerComponent],
  imports: [FormsModule, RouterModule.forChild(CustomerRoutes)],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
