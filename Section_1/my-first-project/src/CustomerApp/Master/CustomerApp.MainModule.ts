import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterComponent } from './CustomerApp.MasterComponent';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';
@NgModule({
  declarations: [MasterComponent, HomeComponent],
  imports: [RouterModule.forRoot(MainRoutes), BrowserModule, FormsModule],
  providers: [{ provide: BaseLogger, useClass: ConsoleLogger }],
  bootstrap: [MasterComponent],
})
export class MainModule {}
