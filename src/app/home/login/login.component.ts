import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) { }
  email: string = 'admin';
  password: string = 'password';
  spinner: boolean = false;
  login() {
    this.spinner = true;
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.apiService.login(this.email, this.password).subscribe((res) => {
      this.spinner = false
      console.log(res);
      localStorage.setItem('token', res.access_token.access_token)
      this.router.navigate(['/home/stacks'])
      this.snackbarService.openSnackBar({ message: 'Logged In Successfully', type: 'success' })
    },
      (error) => {
        this.spinner = false;
        this.snackbarService.openSnackBar({ message: 'Something Went Wrong', type: 'error' })
        console.log(error)
      })
  }
}
