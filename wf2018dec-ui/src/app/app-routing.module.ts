import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  // {path: '**',component: LandingPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'landingPage', component: LandingPageComponent },
  {path: 'login', component: LoginComponent }])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
