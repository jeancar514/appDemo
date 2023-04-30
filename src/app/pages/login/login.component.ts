import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as AOS from 'aos'
import { AuthFirebaseService } from './auth-firebase.service';

 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements  OnInit {

  formGroupLogin:FormGroup; 
  formGroupRegister:FormGroup; 
  login: boolean = false;

  constructor(
    private authFirebase: AuthFirebaseService,
  ){

    this.formGroupLogin = new FormGroup({
      usernameEmail: new FormControl(),
      password: new FormControl(),
    })

    this.formGroupRegister = new FormGroup({
      name: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })

  }
  ngOnInit(): void {
    window.addEventListener("load", AOS.refresh);
  }

  submitLogin(){
    if(this.formGroupLogin.valid){
      const {email, password} = this.formGroupLogin.getRawValue();
      this.authFirebase.login(email,password).then(
        (user) =>{
          console.log(user);
        }
      ).catch(
        (error)=>{
          console.log(error);
        }
      )
    }else{
      this.formGroupRegister.markAllAsTouched();
    }

  }

  async submitRegister(){
    if(this.formGroupRegister.valid){
      const {email, password} = this.formGroupRegister.getRawValue();
      this.authFirebase.register(email,password).then(
        (user) =>{
          console.log(user);
        }
      ).catch(
        (error)=>{
          console.log(error);
        }
      )
    }else{
      this.formGroupRegister.markAllAsTouched();
    }
  }

  loguout(){
    return this.authFirebase.loguout();
  }

  formLogin(){
    this.login = true;
  }

  formRegister(){
    this.login = false;
  }
}



  // firebase deploy --token "$FIREBASE_TOKEN"
  // 1//057BMG5CXLCAfCgYIARAAGAUSNwF-L9IrvzZXY5Jyz2-_QR72lquM5OW2I0OHUKTGYBx2Ri5ArOP_USyLLevald7qcdpCBvdsH_A
 // https://appdemo-68c75.web.app
