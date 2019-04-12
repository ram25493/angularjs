import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PearlComponent } from './pearl.component';

describe('PearlComponent', () => {
  let component: PearlComponent;
  let fixture: ComponentFixture<PearlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PearlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PearlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
