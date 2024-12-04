import { Component } from '@angular/core';
// import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
// import { StoreService } from '../receptionist/store/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private apiService:ApiService) { }

  logout() {
    this.apiService.logout().subscribe((res)=>{
      console.log(res);
      
    })
  }
}
