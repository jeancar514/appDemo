import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import NavComponent from '../nav/nav.component';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export default class NovedadesComponent {


  menuPerfil(event:Event){}
}
