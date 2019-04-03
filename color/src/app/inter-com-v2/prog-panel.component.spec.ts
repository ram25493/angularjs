import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgPanelComponent } from './prog-panel.component';

describe('ProgPanelComponent', () => {
  let component: ProgPanelComponent;
  let fixture: ComponentFixture<ProgPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
