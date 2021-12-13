import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomerModule } from './Customer/Customer.module';

platformBrowserDynamic()
  .bootstrapModule(CustomerModule)
  .catch((err) => console.error(err));
