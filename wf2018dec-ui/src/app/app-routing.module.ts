import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  {path: '**',component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent }])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
