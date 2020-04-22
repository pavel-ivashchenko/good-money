
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CoreRoutingModule } from './core-routing.module';
import { SERVICES } from './services';
import { CorePageComponent } from './pages';
import { coreModuleStateToken, coreModuleState } from './store/reducers';

@NgModule({
  declarations: [
    CorePageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StoreModule.forRoot(coreModuleStateToken)
  ],
  providers: [
    { provide: coreModuleStateToken, useValue: coreModuleState },
    ...SERVICES
  ],
  exports: [
    CoreRoutingModule
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
