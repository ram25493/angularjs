import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropyComponent } from './dropy.component';

describe('DropyComponent', () => {
  let component: DropyComponent;
  let fixture: ComponentFixture<DropyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
