
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CORE_ROUTES } from './constants/core-routes';

@NgModule({
  imports: [ RouterModule.forRoot(CORE_ROUTES) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
