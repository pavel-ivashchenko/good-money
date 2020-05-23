
import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  @Input() set isLargeMode(value: boolean) {
    if (!this.elementRef) { return; }
    this._isLargeMode = value;
    this.elementRef.nativeElement.className = this._isLargeMode ? 'col-12' : 'col-3';
  };

  private _isLargeMode = false;

  public get titleClass(): string { return this._isLargeMode ? 'col' : 'col-12'; }
  public get detailsClass(): string { return this._isLargeMode ? 'col flex-row' : 'col-12 flex-column'; }
  public get ctrlsClass(): string { return this._isLargeMode ? 'col' : 'col-12'; }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void { }

}
