
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@app/shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { coreModuleStateToken, coreModuleState } from './store/reducers';
import { SERVICES } from './services';
import { CORE_PAGES } from './pages';

@NgModule({
  declarations: [
    ...CORE_PAGES
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    StoreModule.forRoot(coreModuleStateToken)
  ],
  providers: [
    { provide: coreModuleStateToken, useValue: coreModuleState },
    ...SERVICES
  ],
  exports: [
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
