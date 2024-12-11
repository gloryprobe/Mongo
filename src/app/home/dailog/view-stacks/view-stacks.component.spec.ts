import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStacksComponent } from './view-stacks.component';

describe('ViewStacksComponent', () => {
  let component: ViewStacksComponent;
  let fixture: ComponentFixture<ViewStacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStacksComponent]
    });
    fixture = TestBed.createComponent(ViewStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
