import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {

  formGroupLogin:FormGroup 
  constructor(){

    this.formGroupLogin = new FormGroup({
      usernameEmail: new FormControl([]),
      password: new FormControl(),

    })

  }

}
