import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService, NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { UserService } from '../services/user.sevices';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export default class LogInComponent {

  user: any = "";
  password: any = "";
  passwordVisible = false;

  constructor(private ntService: NzNotificationService, private userService: UserService, private router: Router) {

    if (localStorage.getItem('user')) {
      this.ntService.info('Sesion iniciada', '')
      this.router.navigate(["/contro-user"])
    }
  }

  login() {
    if ((this.user != null && this.password != null) && (this.user != '' && this.password != '')) {
      const authenticatedUser = this.userService.login(this.user, this.password);
      if (authenticatedUser) {
        this.ntService.success('¡Bienvenido! ', '');
        console.log(authenticatedUser)
        this.router.navigate(["/contro-user"])
        localStorage.setItem('user', JSON.stringify(authenticatedUser))
      } else {
        this.ntService.error('Por favor, asegúrate de que tus credenciales sean correctas para iniciar sesión', '');
      }
    } else {
      this.ntService.error('El formulario tiene campos vacios verificalos', '');
    }
  }

}
