import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsTemplateComponent } from './js-template/js-template.component';
import {NgxPrintModule} from 'ngx-print';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
@NgModule({
  declarations: [
    AppComponent,
    JsTemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    FormsModule,
    SocialLoginModule,
  ],
  providers: [{
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin: false,
      providers:[
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('461692773510-occ96at29dmrrgf2s4tmqmap9v611svi.apps.googleusercontent.com'),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ],
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
