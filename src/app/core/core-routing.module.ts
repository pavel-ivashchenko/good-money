
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { CORE_ROUTES } from './constants/core-routes';

@NgModule({
  imports: [ RouterModule.forRoot(CORE_ROUTES, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
