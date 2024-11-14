import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // Datos del usuario
  user = {
    email: '',
    password: ''
  };

  constructor( private authService: AuthService) { }
  // Método para manejar el login
  onLogin(): void {
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        // Aquí puedes almacenar el token en localStorage o manejar la redirección
        localStorage.setItem('authToken', response.token);
      },
      error: (error) => {
        console.error('Error de autenticación:', error);
      }
    });
  }
}
