
import { Routes } from '@angular/router';

import { CorePageComponent, NotFoundPageComponent, MainPageComponent } from '../pages';

export enum CORE_ROUTE_NAMES {
  RATES = 'rates',
  NEWS = 'news',
  OTHER = '**',
  NOT_FOUND = '404'
}

export const CORE_ROUTES: Routes = [{
  path: '',
  component: CorePageComponent,
  children: [{
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  }, {
    path: CORE_ROUTE_NAMES.RATES,
    loadChildren: () => import('@app/rates/rates.module').then(m => m.RatesModule)
  }, {
    path: CORE_ROUTE_NAMES.OTHER,
    redirectTo: CORE_ROUTE_NAMES.NOT_FOUND,
    pathMatch: 'full'
  }, {
    path: CORE_ROUTE_NAMES.NOT_FOUND,
    component: NotFoundPageComponent
  }]
}];
