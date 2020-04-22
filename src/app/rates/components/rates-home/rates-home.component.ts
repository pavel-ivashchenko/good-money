import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rates-home',
  templateUrl: './rates-home.component.html',
  styleUrls: ['./rates-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
