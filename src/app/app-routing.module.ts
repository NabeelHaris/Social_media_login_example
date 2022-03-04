import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsTemplateComponent } from './js-template/js-template.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path: 'angular-detail',
    component: JsTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
