import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './pages/login/login.component';


const routes: Routes = [
  {
    path:"",
    loadComponent: () => import('./pages/login/login.component'),
    title:'App - Login'
  },
  {
    path:"login",
    loadComponent: () => import('./pages/login/login.component'),
    title:'App - Login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
