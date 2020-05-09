
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MockCards } from './models';

@Component({
  selector: 'app-rates-home',
  templateUrl: './rates-home.component.html',
  styleUrls: ['./rates-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesHomeComponent implements OnInit {

  public isGrid = false;
  public cards = MockCards;

  constructor() { }

  ngOnInit(): void { }

}
