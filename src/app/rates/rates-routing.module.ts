
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RATES_ROUTES } from './constants';

@NgModule({
  imports: [ RouterModule.forChild(RATES_ROUTES) ],
  exports: [ RouterModule ]
})
export class RatesRoutingModule { }
