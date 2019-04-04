import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwColorComponent } from './shw-color.component';

describe('ShwColorComponent', () => {
  let component: ShwColorComponent;
  let fixture: ComponentFixture<ShwColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShwColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShwColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
