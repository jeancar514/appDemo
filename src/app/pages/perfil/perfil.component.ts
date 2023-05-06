import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import NavComponent from '../nav/nav.component';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule,MatCardModule, NavComponent ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export default class PerfilComponent {
  panelSeleted:string = "notificaciones.jpg";


  menuPerfil(event: string) {
    this.panelSeleted = event;
  }

}
