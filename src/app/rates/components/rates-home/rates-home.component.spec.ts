import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesHomeComponent } from './rates-home.component';

describe('RatesHomeComponent', () => {
  let component: RatesHomeComponent;
  let fixture: ComponentFixture<RatesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
