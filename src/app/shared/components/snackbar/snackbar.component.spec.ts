import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
      imports: [MatSnackBarModule],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: {} },
        { provide: MatSnackBarRef, useValue: {} }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
