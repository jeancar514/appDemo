import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import NavComponent from '../nav/nav.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export default class InformationComponent {
  menuPerfil(event: Event) {
  }
}
