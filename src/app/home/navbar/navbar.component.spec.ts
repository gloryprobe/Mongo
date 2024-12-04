import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AuthenticationService } from '../services/authentication.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockAuthenticationService {
  // Mock methods and properties of AuthenticationService if needed
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Add this line to ignore unknown elements

    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
