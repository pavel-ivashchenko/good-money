
import { Routes } from '@angular/router';

import { RatesHomeComponent, RatesComponent } from '../components';

export const RATES_ROUTES: Routes = [{
  path: '',
  component: RatesComponent,
  children: [
    {
      path: '',
      component: RatesHomeComponent
    }
  ]
}];
