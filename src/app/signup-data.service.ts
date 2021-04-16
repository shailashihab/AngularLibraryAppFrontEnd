import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupDataService {
  tokenCheck:Boolean;
  constructor(private http:HttpClient) { }
  user(newUser){
    return this.http.post('https://anglibappbyshaila.herokuapp.com/signup',{'NewUser':newUser})
      // return this.http.post('http://localhost:4000/signup',{'NewUser':newUser})
      .subscribe((data)=>{console.log(data);})
    
  }
  loginUser(loggedinUser){
    return this.http.post<any>('https://anglibappbyshaila.herokuapp.com/login',{'loggedInUser':loggedinUser})
    // return this.http.post<any>('http://localhost:4000/login',{'loggedInUser':loggedinUser})
  }
  loggedIn(){
    return !!localStorage.getItem('token');  
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
