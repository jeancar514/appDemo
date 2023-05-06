import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import NavComponent from '../nav/nav.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,NavComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export default  class TeamComponent {
  menuPerfil(event:Event){}
}
