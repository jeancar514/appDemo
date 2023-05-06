import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,MatMenuModule,MatIconModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export default class NavComponent {
  @Output() menuPerfilEvent = new EventEmitter();
  
  panels= {
    notification : "notificaciones.jpg",
    configuration : "configuration.jpg",
    ayuda : "ayuda.jpg"
  }


  constructor(){}

  menuPerfil(panelSelected:string){
    this.menuPerfilEvent.emit(panelSelected);

  }

}
