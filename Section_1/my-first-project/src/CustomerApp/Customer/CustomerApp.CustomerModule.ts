import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(CustomerRoutes)],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
