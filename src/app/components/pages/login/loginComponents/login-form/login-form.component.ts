import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor( private authService: AuthService, private router: Router) { }
  // Método para manejar el login
  onLogin(): void {
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        // Aquí puedes almacenar el token en localStorage o manejar la redirección
        localStorage.setItem('authToken', response.token);

        this.router.navigate(['/news'])
      },
      error: (error) => {
        console.error('Error de autenticación:', error);
        alert('Error de autenticación')
      }
    });
  }
}
