import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export  default class WelcomeComponent {

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/log-in']); // Navega a la ruta /about al hacer clic en el botón
  }
}
