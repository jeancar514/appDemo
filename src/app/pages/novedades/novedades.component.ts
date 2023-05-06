import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import NavComponent from '../nav/nav.component';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule, NavComponent, MatButtonModule],
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export default class NovedadesComponent {


  menuPerfil(event:Event){}
}
