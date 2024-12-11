import { Component } from '@angular/core';
// import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
// import { StoreService } from '../receptionist/store/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private apiService:ApiService,
    private router:Router,
    private snackbarService:SnackbarService
  ) { }
  routes: { path: string[], label: string }[] = [
    {
      path: ['/home/stacks'],
      label: 'Stacks'
    },
    {
      path: ['/home/instances'],
      label: 'Instances'
    },
    {
      path: ['/home/settings'],
      label: 'Settings'
    }
  ];

  logout() {
    this.apiService.logout().subscribe((res)=>{
      console.log(res);
      localStorage.removeItem('token');
      this.snackbarService.openSnackBar({ message: 'Logged Out Successfully', type: 'success' })
      this.router.navigate(['/'])
    })
  }
}
