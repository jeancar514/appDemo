import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import NavComponent from '../nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [CommonModule, NavComponent,MatButtonModule, MatIconModule],
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export default class ForoComponent {
  menuPerfil(event:Event){}
}
