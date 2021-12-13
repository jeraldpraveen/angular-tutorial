import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';

@NgModule({
  declarations: [SupplierComponent],
  imports: [FormsModule, RouterModule.forChild(SupplierRoutes)],
  providers: [],
  bootstrap: [SupplierComponent],
})
export class SupplierModule {}
