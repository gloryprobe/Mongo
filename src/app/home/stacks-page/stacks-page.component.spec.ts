import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksPageComponent } from './stacks-page.component';

describe('StacksPageComponent', () => {
  let component: StacksPageComponent;
  let fixture: ComponentFixture<StacksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StacksPageComponent]
    });
    fixture = TestBed.createComponent(StacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
