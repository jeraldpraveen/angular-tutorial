import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World</h1>
    <p>Message From Jerald</p>
    <app-welcome></app-welcome>`,
})
class HelloWorldComponent {}

@Component({
  selector: 'app-welcome',
  template: `<h1>Welcome Component</h1>`,
})
class WelcomeComponent {}

@NgModule({
  bootstrap: [HelloWorldComponent],
  declarations: [HelloWorldComponent, WelcomeComponent],
  imports: [BrowserModule],
})
class JeraldModule {}

platformBrowserDynamic().bootstrapModule(JeraldModule);
