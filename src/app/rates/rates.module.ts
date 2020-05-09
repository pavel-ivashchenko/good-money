
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { RatesRoutingModule } from './rates-routing.module';

import { RATES_COMPONENTS } from './components';

@NgModule({
  declarations: [
    ...RATES_COMPONENTS
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RatesRoutingModule
  ]
})
export class RatesModule { }
