import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-state-user',
  standalone: true,
  imports: [],
  templateUrl: './state-user.component.html',
  styleUrl: './state-user.component.css'
})
export    default class StateUserComponent {


  userLogin?: User;
  dateIngress = new Date();

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const verificationUser = localStorage.getItem('verification');
      if (verificationUser) {
        this.userLogin = JSON.parse(storedUser) as User
      } else {
        this.router.navigate(["login"])
      }
    } else {
      this.router.navigate(["login"])
    }
  }

  
  salir() {
    localStorage.clear()
    this.router.navigate([""])
    this.router.navigate(['/welcome']); 
  }
  

}
