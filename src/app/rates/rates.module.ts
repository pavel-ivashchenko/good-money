
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesRoutingModule } from './rates-routing.module';

import { RatesComponent, RatesHomeComponent } from './components'

@NgModule({
  declarations: [
    RatesComponent,
    RatesHomeComponent
  ],
  imports: [
    CommonModule,
    RatesRoutingModule
  ]
})
export class RatesModule { }
