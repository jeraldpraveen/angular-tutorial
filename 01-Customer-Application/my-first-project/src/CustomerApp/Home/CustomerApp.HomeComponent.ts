import { Component, Injector } from '@angular/core';
// import { ILogger, DBLogger } from '../Utility/CustomerApp.Logger';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  selector: '',
  templateUrl: './CustomerApp.HomeView.html',
})
export class HomeComponent {
  // LogObject: ILogger = new DBLogger();
  // constructor() {
  //   this.LogObject.Log();
  // }
  // constructor(_logger: BaseLogger) {
  //   _logger.Log();
  // }
  constructor(_injector: Injector) {
    const injectorObject = _injector.get('2');
    injectorObject.Log();
  }
}
