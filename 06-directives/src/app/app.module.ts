import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgforofDemoComponent } from './components/ngforof-demo/ngforof-demo.component';
import { NgswitchDemoComponent } from './components/ngswitch-demo/ngswitch-demo.component';
import { CustomDerivativeDemoComponent } from './components/custom-derivative-demo/custom-derivative-demo.component';
import { BoxDirective } from './directives/box.directive';

@NgModule({
  declarations: [AppComponent, NgforofDemoComponent, NgswitchDemoComponent, CustomDerivativeDemoComponent, BoxDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
