import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterComponent } from './CustomerApp.MasterComponent';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import {
  BaseLogger,
  ConsoleLogger,
  DBLogger,
} from '../Utility/CustomerApp.Logger';

var providerCollection = [];
providerCollection.push({ provide: '1', useClass: ConsoleLogger });
providerCollection.push({ provide: '2', useClass: DBLogger });
providerCollection.push({ provide: BaseLogger, useClass: ConsoleLogger });

@NgModule({
  declarations: [MasterComponent, HomeComponent],
  imports: [RouterModule.forRoot(MainRoutes), BrowserModule, FormsModule],
  providers: [providerCollection],
  bootstrap: [MasterComponent],
})
export class MainModule {}
