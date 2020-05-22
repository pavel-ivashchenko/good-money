
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SHARED_COMPONENTS } from './components';
import { SHARED_DIRECTIVES } from './directives';

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES
  ]
})
export class SharedModule { }
