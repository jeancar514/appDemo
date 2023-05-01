import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
  {
    path:"perfil",
    loadComponent: () => import('./pages/perfil/perfil.component'),
    title:'App - Perfil'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
