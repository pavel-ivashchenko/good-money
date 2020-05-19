
import { Routes } from '@angular/router';

import { RatesComponent } from '../components';

export const RATES_ROUTES: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: RatesComponent,
    }
  ]
}];
