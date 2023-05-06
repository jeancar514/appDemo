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

  viewNotes:boolean = true; 

  notes = [
    {
      icon: "notifications_active",
      content: "Francisco Diaz agrego una nueva nota : mi cumpleaños al muro de la comunidad",
      date: "Hace 11 minutos"
    },
    {
      icon: "notifications_active",
      content: "Maria Gonclaves agrego una nueva nota : Hola! soy Maria al muro de la comunidad",
      date: "Hace 11 minutos"
    },
    {
      icon: "notifications_active",
      content: "Moises Arevalo agrego una nueva nota : Evento de musica al muro de la comunidad",
      date: "Hace 9 horas"
    },
  ]; 

  menuPerfil(event:Event){}

  viewNote(){
    this.viewNotes = true;
  }
  crearNote(){
    this.viewNotes = false;
  }
}
