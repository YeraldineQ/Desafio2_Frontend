import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthSocialService } from '../../authsocial.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent {
  constructor(
    private readonly authSocialMediaService: AuthSocialService,
    private readonly router:Router,
    private readonly authService:AuthService
){}
signInWithGoogle() {
  this.authSocialMediaService
    .signInWithGoogle()
    .then((result) => {
      console.log('User signed in:', result.user);
      this.router.navigate(['/news'])
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error);
      alert('No se ha iniciado sesión');
      });
  }
loginWithFacebook() {
  this.authSocialMediaService.signInWithFacebook()
    .then((result) => {
      console.log('Logged in with Facebook:', result);
      this.router.navigate(['/news'])
    })
    .catch((error) => {
      console.error('Error logging in with Facebook:', error);
      alert('No se ha iniciado sesión');
      });
  }
}
