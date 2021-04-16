import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupDataService } from '../signup-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String="Login"
  loginData={
    Email:'',
    Password:''
  }
  errMsg=false;
  token='';
  constructor(private singupdataServObj:SignupDataService, private route:Router) { }

  ngOnInit(): void {
  
  }
  loginUser(){
    this.singupdataServObj.loginUser(this.loginData)
    .subscribe((res)=>{
      console.log('after backend');
      if(res===null){
        alert('User not found. Please SignUp First');
      }
      else if(res.token){
        localStorage.setItem('token', res.token);
        console.log('saved');
        this.route.navigate(['']);
      }
      else{
        console.log(res);
        this.route.navigate(['']);
      }
    })
  }
}
