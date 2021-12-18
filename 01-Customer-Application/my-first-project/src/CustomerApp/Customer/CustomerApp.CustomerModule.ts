import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomerComponent, GridComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
