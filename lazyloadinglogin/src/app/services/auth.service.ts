import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(): boolean {
    return true;
  }
  public login(postData){
    //
  }
  public signup(postData){
    //
  }
  public logout(postData){
    //
  }
}
