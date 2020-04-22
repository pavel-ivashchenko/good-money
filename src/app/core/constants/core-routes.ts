
import { Routes } from '@angular/router';

import { CorePageComponent } from '../pages/core-page/core-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';

export enum CORE_ROUTE_NAMES {
  RATES = 'rates',
  OTHER = '**',
  NOT_FOUND = '404'
}

export const CORE_ROUTES: Routes = [{
  path: '',
  component: CorePageComponent,
  children: [{
    path: '',
    redirectTo: CORE_ROUTE_NAMES.RATES,
    pathMatch: 'full' },
  {
    path: CORE_ROUTE_NAMES.RATES,
    loadChildren: '@app/rates/rates.module#RatesModule'
  }, {
    path: CORE_ROUTE_NAMES.OTHER,
    redirectTo: CORE_ROUTE_NAMES.NOT_FOUND,
    pathMatch: 'full'
  }, {
    path: CORE_ROUTE_NAMES.NOT_FOUND,
    component: NotFoundPageComponent
  }]
}];
