import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartArrayDataComponent } from './bar-chart-array-data.component';

describe('BarChartArrayDataComponent', () => {
  let component: BarChartArrayDataComponent;
  let fixture: ComponentFixture<BarChartArrayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartArrayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartArrayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
