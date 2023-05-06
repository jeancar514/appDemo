import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import NavComponent from '../nav/nav.component';


@Component({
  selector: 'app-redes',
  standalone: true,
  imports: [CommonModule,MatIconModule, NavComponent],
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export default class RedesComponent {

  menuPerfil(event: Event) {
  }
}
