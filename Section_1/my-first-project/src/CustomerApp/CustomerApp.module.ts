import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { MasterComponent } from './Master/CustomerApp.MasterComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';

@NgModule({
  declarations: [
    CustomerComponent,
    SupplierComponent,
    HomeComponent,
    MasterComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)],
  providers: [],
  bootstrap: [MasterComponent],
})
export class CustomerAppModule {}
