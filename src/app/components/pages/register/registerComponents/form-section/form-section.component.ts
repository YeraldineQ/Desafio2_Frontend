import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})



export class FormSectionComponent implements AfterViewInit {

    // Datos del usuario
    user = {
      name: '',
      lastname: '',
      birthday: '',
      email: '',
      password: ''
    };

  constructor(private renderer: Renderer2, private el: ElementRef, private authService: AuthService) { }

  ngAfterViewInit(): void {
    this.removeSplineLogo();
  }

  private removeSplineLogo(): void {
    const splineViewer = this.el.nativeElement.querySelector('spline-viewer');

    if (splineViewer) {
      const interval = setInterval(() => {
        const shadowRoot = splineViewer.shadowRoot;
        const logoElement = shadowRoot?.querySelector('#logo');

        if (logoElement) {
          this.renderer.removeChild(shadowRoot, logoElement);
          clearInterval(interval); // Detén la verificación una vez que el logo se haya eliminado
        }
      }, 500); // Verifica cada 500ms
    }
  }
  
  // Método para manejar el registro
  onRegister(): void {
    this.authService.registerUser(this.user).subscribe({
      next: (response: any) => {
        console.log('Usuario registrado:', response);
        alert('Usuario registrado exitosamente');
      },
      error: (error: { message: string }) => {
        console.error('Error en el registro:', error);
        alert('Error en el registro: ' + error.message);
      }
    });
  }
}
