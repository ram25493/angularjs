import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterComV2Component } from './inter-com-v2.component';

describe('InterComV2Component', () => {
  let component: InterComV2Component;
  let fixture: ComponentFixture<InterComV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterComV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterComV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
