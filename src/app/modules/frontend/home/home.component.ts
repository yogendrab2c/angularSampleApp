import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 import { ConfigService } from '../../../common_service/ConfigService.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private authService: AuthService,
     private config: ConfigService) {
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((position) => {
      //       localStorage.setItem('lat', (position.coords.latitude).toString());
      //       localStorage.setItem('long', (position.coords.longitude).toString());
      //    console.log(position.coords.latitude);
      //   });
      // } else {
      //   alert("Geolocation is not supported by this browser.");
      // } 
     }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }
  pay(): void {
    
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
