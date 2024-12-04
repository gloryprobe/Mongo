import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private apiService:ApiService){}
  email: string = '';
  password: string = '';
  login(){
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.apiService.login(this.email, this.password).subscribe((res)=>{
      console.log(res);
      
    })
  }
}
