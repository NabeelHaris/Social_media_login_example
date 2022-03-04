import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider,
  SocialUser, } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  display = false;
  loginForm = {
    username:'',
    password:''
  }
  localData:any;
  // socialUser!: SocialUser;
  // isLoggedin?: boolean;

  constructor(private router: Router,  private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.localData= localStorage.getItem('loginData');
    // this.socialAuthService.authState.subscribe((user) => {
    //   console.log("user:", user);
      
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    // });
  }

  simpleLogin() {
    // if(this.localData){
    localStorage.setItem('loginData', JSON.stringify(this.loginForm))
    this.router.navigate(["/angular-detail"]);
    // }
    // else{
    //   console.log("Please login first");
    // 461692773510-occ96at29dmrrgf2s4tmqmap9v611svi.apps.googleusercontent.com
      
    // }
  }

  socialLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
      console.log("res:", res);
      this.router.navigate(["/angular-detail"]);
    })
  }


}
