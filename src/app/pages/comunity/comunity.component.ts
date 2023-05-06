import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import NavComponent from '../nav/nav.component';



@Component({
  selector: 'app-comunity',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule, NavComponent],
  templateUrl: './comunity.component.html',
  styleUrls: ['./comunity.component.scss']
})
export default  class ComunityComponent {

  notes = [
    {
      icon: "notifications_active",
      content: "Francisco Diaz agrego una nueva nota : mi cumpleaños al muro de la comunidad",
      date: "Hace 11 minutos"
    },
    {
      icon: "notifications_active",
      content: "Francisco Diaz agrego una nueva nota : mi cumpleaños al muro de la comunidad",
      date: "Hace 11 minutos"
    },
    {
      icon: "notifications_active",
      content: "Francisco Diaz agrego una nueva nota : mi cumpleaños al muro de la comunidad",
      date: "Hace 11 minutos"
    },
    {
      icon: "notifications_active",
      content: "Francisco Diaz agrego una nueva nota : mi cumpleaños al muro de la comunidad",
      date: "Hace 11 minutos"
    },
  ]; 

  menuPerfil(event:Event){}


}
