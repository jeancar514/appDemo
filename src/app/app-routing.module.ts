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
  {
    path:"redes",
    loadComponent: () => import('./pages/redes/redes.component'),
    title:'App - Redes'
  },
  {
    path:"information",
    loadComponent: () => import('./pages/information/information.component'),
    title:'App - Informacion'
  },
  {
    path:"team",
    loadComponent: () => import('./pages/team/team.component'),
    title:'App - Team'
  },
  {
    path:"foro",
    loadComponent: () => import('./pages/foro/foro.component'),
    title:'App - Foro',
  },
  {
    path:"comunity",
    loadComponent: () => import('./pages/comunity/comunity.component'),
    title:'App - comunity',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
