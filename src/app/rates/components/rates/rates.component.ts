
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MockProducts } from './models/mock-products.model';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesComponent implements OnInit {

  public isGridView = false;
  public products = MockProducts;

  constructor() { }

  ngOnInit(): void { }

}
