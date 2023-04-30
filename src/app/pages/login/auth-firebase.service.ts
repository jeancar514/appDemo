import { Injectable } from '@angular/core';
import {Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword,GoogleAuthProvider, signOut} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    private fireAuth: Auth
  ) { }

  login(email:string, password:string){
    return signInWithEmailAndPassword(this.fireAuth,email,password);

  }

  async register(email:string, password:string){
    const user = await createUserWithEmailAndPassword(this.fireAuth,email,password)

    return await signInWithEmailAndPassword(this.fireAuth,email,password);
  }

  loguout(){
    return signOut(this.fireAuth);
  }

}
