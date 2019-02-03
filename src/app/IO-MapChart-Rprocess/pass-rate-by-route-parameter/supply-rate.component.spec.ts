import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyRateComponent } from './supply-rate.component';

describe('SupplyRateComponent', () => {
  let component: SupplyRateComponent;
  let fixture: ComponentFixture<SupplyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
